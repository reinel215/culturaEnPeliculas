DROP FUNCTION IF EXISTS registrar_usuario;
CREATE OR REPLACE FUNCTION registrar_usuario(
    _usuario     VARCHAR(20),
    _correo      VARCHAR(30),
    _nombre      VARCHAR(20),
    _genero      VARCHAR(1),
    _contraseña  VARCHAR(20),
    _ruta_imagen VARCHAR
) RETURNS VARCHAR AS $$
DECLARE
BEGIN
	INSERT INTO USUARIO(usuario,correo,nombre,genero,contraseña,ruta_imagen) 
	VALUES(_usuario,_correo,_nombre,_genero,_contraseña,_ruta_imagen);
	RETURN 'REGISTRO DE USUARIO EXITOSO';
END;
$$ LANGUAGE plpgsql;

DROP FUNCTION IF EXISTS registrar_pelicula;
CREATE OR REPLACE FUNCTION registrar_pelicula(
    _clave VARCHAR
) RETURNS INTEGER AS $$
DECLARE
_id INTEGER;
BEGIN
    SELECT id INTO _id FROM PELICULA WHERE clave = _clave;
    IF NOT FOUND THEN
        INSERT INTO PELICULA(clave) VALUES(_clave);
		SELECT id INTO _id FROM PELICULA WHERE clave = _clave;
    END IF;
	RETURN _id;
END;
$$ LANGUAGE plpgsql;

DROP FUNCTION IF EXISTS registrar_critica;
CREATE OR REPLACE FUNCTION registrar_critica(
    _mensaje       VARCHAR,
    pelicula_clave VARCHAR,
    _usuario       VARCHAR(20)
) RETURNS VARCHAR AS $$
DECLARE
    pelicula_id INTEGER;
    usuario_id  INTEGER;
BEGIN
    SELECT registrar_pelicula(pelicula_clave) INTO pelicula_id;
	SELECT id INTO usuario_id FROM USUARIO WHERE usuario = _usuario;

	INSERT INTO CRITICA(mensaje, pelicula_id, usuario_id) 
	VALUES(_mensaje, pelicula_id, usuario_id);
	
	RETURN 'REGISTRO DE USUARIO EXITOSO';
END;
$$ LANGUAGE plpgsql;