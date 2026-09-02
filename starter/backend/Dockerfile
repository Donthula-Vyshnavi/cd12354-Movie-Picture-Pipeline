FROM python:3.10-alpine3.18

ENV PYTHONUNBUFFERED=1
ENV FLASK_RUN_HOST=0.0.0.0

WORKDIR /app

RUN apk add --no-cache \
    pcre \
    pcre-dev \
    build-base \
    gcc \
    linux-headers \
    openssl \
    libffi-dev \
    && pip install --no-cache-dir pipenv

COPY Pipfile Pipfile.lock /app/

RUN pipenv install --system --deploy

COPY . /app

EXPOSE 5000

CMD ["uwsgi", "--http", ":5000", "--master", "--enable-threads", "--module", "starter.backend:app"]
