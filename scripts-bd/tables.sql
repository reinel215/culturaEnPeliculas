DROP TABLE IF EXISTS PELICULA;
DROP TABLE IF EXISTS USUARIO;

CREATE TABLE USUARIO(
    id            SERIAL      PRIMARY KEY,
    usuario       VARCHAR(20) NOT NULL     UNIQUE,
    correo        VARCHAR(30) NOT NULL     UNIQUE,
    nombre        VARCHAR(20) NOT NULL,
    genero        VARCHAR(1)  NOT NULL     CHECK(genero IN ('M','F','O')),
    contraseña    VARCHAR(20) NOT NULL,
    administrador BOOL        NOT NULL     DEFAULT FALSE,
    fecha         DATE        NOT NULL     DEFAULT CURRENT_DATE
);


CREATE TABLE PELICULA(
    id            SERIAL      PRIMARY KEY,
    nombre        VARCHAR(20) NOT NULL     UNIQUE,
    director      VARCHAR(20) NOT NULL,
    genero        VARCHAR(20) NOT NULL,
    descripcion   VARCHAR     NOT NULL,
    ruta_imagen   VARCHAR     NOT NULL,
    fecha_estreno DATE        NOT NULL,
    fecha         DATE        NOT NULL     DEFAULT    CURRENT_DATE,
	usurio_id     INTEGER     NOT NULL     REFERENCES USUARIO(id)
);