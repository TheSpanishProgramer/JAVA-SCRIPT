//Cualquier letra en minuscula	

[a-z]

//Entero	

^(?:\+|-)?\d+$

//Correo electrónico

/[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/

//URL

^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)( [a-zA-Z0-9\-\.\?\,\'\/\\\+&%\$#_]*)?$

//Contraseña segura

(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,10})$

//(Entre 8 y 10 caracteres, por lo menos un digito y un alfanumérico, y no puede contener caracteres espaciales)

//Fecha

^\d{1,2}\/\d{1,2}\/\d{2,4}$

//(Por ejemplo 01/01/2007)

//Hora	

^(0[1-9]|1\d|2[0-3]):([0-5]\d):([0-5]\d)$

//(Por ejemplo 10:45:23)

//Número tarjeta de crédito

^((67\d{2})|(4\d{3})|(5[1-5]\d{2})|(6011))(-?\s?\d{4}){3}|(3[4,7])\ d{2}-?\s?\d{6}-?\s?\d{5}$

//Número teléfono

^[0-9]{2,3}-? ?[0-9]{6,7}$

//Código postal

^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$

//Certificado Identificación Fiscal

^(X(-|\.)?0?\d{7}(-|\.)?[A-Z]|[A-Z](-|\.)?\d{7}(-|\.)? [0-9A-Z]|\d{8}(-|\.)?[A-Z])$





