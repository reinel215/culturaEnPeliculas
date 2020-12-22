DROP TABLE IF EXISTS PERSONAJE;
DROP TABLE IF EXISTS ACTOR;
DROP TABLE IF EXISTS VALORACION;
DROP TABLE IF EXISTS CRITICA;
DROP TABLE IF EXISTS PELICULA;
DROP TABLE IF EXISTS USUARIO;

CREATE TABLE USUARIO(
    id            SERIAL      PRIMARY KEY,
    usuario       VARCHAR(20) NOT NULL UNIQUE,
    correo        VARCHAR(30) NOT NULL UNIQUE,
    nombre        VARCHAR(20) NOT NULL,
    genero        VARCHAR(1)  NOT NULL CHECK(genero IN ('M','F','O')),
    contraseña    VARCHAR(20) NOT NULL,
    ruta_imagen   VARCHAR     NOT NULL,
    administrador BOOL        NOT NULL DEFAULT FALSE,
    fecha         DATE        NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE PELICULA(
    id            SERIAL      PRIMARY KEY,
    nombre        VARCHAR(20) NOT NULL UNIQUE,
    director      VARCHAR(20) NOT NULL, 
    genero        VARCHAR(20) NOT NULL,
    descripcion   VARCHAR     NOT NULL,
    ruta_imagen   VARCHAR     NOT NULL,
    fecha_estreno DATE        NOT NULL,
    fecha         DATE        NOT NULL DEFAULT CURRENT_DATE,
	usurio_id     INTEGER     NOT NULL REFERENCES USUARIO(id)
);

CREATE TABLE CRITICA(
    id          SERIAL  PRIMARY KEY,
    mensaje     VARCHAR NOT NULL,
    fecha       DATE    NOT NULL DEFAULT CURRENT_DATE,
    pelicula_id INTEGER NOT NULL REFERENCES PELICULA(id),
    usuario_id  INTEGER NOT NULL REFERENCES USUARIO(id)
);

CREATE TABLE VALORACION(
    id               SERIAL  PRIMARY KEY,
    numero_estrellas INTEGER NOT NULL CHECK(numero_estrellas > 0 AND numero_estrellas < 6),
    fecha            DATE    NOT NULL DEFAULT CURRENT_DATE,
    pelicula_id      INTEGER NOT NULL REFERENCES PELICULA(id),
    usuario_id       INTEGER NOT NULL REFERENCES USUARIO(id),
    UNIQUE(pelicula_id, usuario_id)
);

CREATE TABLE ACTOR(
    id          SERIAL      PRIMARY KEY,
    nombre      VARCHAR(20) NOT NULL UNIQUE,
    fecha       DATE        NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE PERSONAJE(
    id          SERIAL      PRIMARY KEY,
    nombre      VARCHAR(20) NOT NULL,
    fecha       DATE        NOT NULL DEFAULT CURRENT_DATE,
    pelicula_id INTEGER     NOT NULL REFERENCES PELICULA(id),
    actor_id    INTEGER     NOT NULL REFERENCES ACTOR(id),
    UNIQUE(nombre, pelicula_id, actor_id)
);



CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
	"sess" json NOT NULL,
	"expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);

ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

CREATE INDEX "IDX_session_expire" ON "session" ("expire");