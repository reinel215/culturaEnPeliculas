drop function registrar_usuario;

CREATE OR REPLACE FUNCTION registrar_usuario(
    _usuario     VARCHAR(20),
    _correo      VARCHAR(30),
    _nombre      VARCHAR(20),
    _genero      VARCHAR(1),
    _contraseña  VARCHAR(20),
    _ruta_imagen VARCHAR
) RETURNS void AS $$
DECLARE
BEGIN
	INSERT INTO USUARIO(
		usuario,
		correo,
		nombre,
		genero,
		contraseña,
		ruta_imagen
	) VALUES(
		_usuario,
		_correo,
		_nombre,
		_genero,
		_contraseña,
		_ruta_imagen
	);
exception
	   when no_data_found then 
	      raise exception 'error';
END;
$$ LANGUAGE plpgsql;