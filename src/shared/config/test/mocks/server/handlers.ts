import {
  DefaultBodyType,
  HttpResponse,
  PathParams,
  ResponseResolver,
  delay,
  http,
} from 'msw';
import { HttpRequestResolverExtras } from 'msw/lib/core/handlers/HttpHandler';
import { mockData } from './mockData';

type Resolver = ResponseResolver<
  HttpRequestResolverExtras<PathParams>,
  DefaultBodyType,
  undefined
>;

const searchResponder: Resolver = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search.name');
  const page = Number(url.searchParams.get('page')) || 0;
  const limit = Number(url.searchParams.get('page_size')) || 20;
  const resData = searchTerm
    ? [...mockData]
        .filter((char) =>
          char.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        )
        .splice(page * limit, limit)
    : [...mockData].splice(page * limit, limit);
  await delay(100);
  return HttpResponse.json(
    {
      results: resData,
      total: limit,
    },
    { status: 200 }
  );
};

const detailsResponder: Resolver = async ({ params }) => {
  const { id } = params;
  const res = mockData.filter((char) => {
    return char.id === +id;
  })[0];
  const right = HttpResponse.json(
    {
      res,
    },
    { status: 200 }
  );
  const wrong = HttpResponse.json(
    {
      body: `<!doctype html>
      <html lang=en>
      <title>404 Not Found</title>
      <h1>Not Found</h1>
      <p>Записи с таким ID не существует.</p>`,
    },
    { status: 404 }
  );

  await delay(100);
  return res ? right : wrong;
};

export const handlers = [
  http.get(`https://belka.romakhin.ru/api/v1/rimorti`, searchResponder),
  http.get(`https://belka.romakhin.ru/api/v1/rimorti/:id`, detailsResponder),
];
