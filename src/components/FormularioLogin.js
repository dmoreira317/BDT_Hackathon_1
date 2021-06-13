import React, { Fragment, useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import GoogleButton from "react-google-button";

const FormularioLogin = () => {
  const validationSchema = Yup.object().shape({
    terms: Yup.bool().oneOf(
      [true],
      "Debe aceptar términos y condiciones para continuar"
    ),
  });

  const [datos, setDatos] = useState({
    nombreCompleto: "",
    email: "",
    contraseña: "",
    terms: false,
  });

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  let indexRef = useRef(0);
  const onSubmit = (data) => {
    alert("Success!" + JSON.stringify(data, null, 4));
    console.log(data);
    const user = data;
    const users = [];
    users.push(user);
    localStorage.setItem(`user${indexRef}`, JSON.stringify(data, null, 4));
    indexRef.current++;
    const preview = localStorage.getItem(JSON.stringify(data, null, 4));
    console.log(preview);
  };

  return (
    <Fragment>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Nombre completo*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre completo"
            name="nombreCompleto"
            onChange={handleInputChange}
            {...register("nombreCompleto", {
              required: {
                value: true,
                message: "El ingreso del nombre es obligatorio",
              },
            })}
          />

          {
            <p className="text-muted color-red">
              {errors.nombreCompleto?.type === "required" &&
                errors.nombreCompleto?.message}
            </p>
          }
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Correo Electrónico*</Form.Label>
          <Form.Control
            type="email"
            placeholder="E-mail"
            name="email"
            onChange={handleInputChange}
            {...register("email", {
              required: {
                value: true,
                message: "El ingreso del email es obligatorio",
              },
            })}
          />{" "}
          {
            <p className="text-muted">
              {errors.email?.type === "required" && errors.email?.message}
            </p>
          }
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña*</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            name="contraseña"
            onChange={handleInputChange}
            {...register("password", {
              required: {
                value: true,
                message: "El ingreso de la contraseña es obligatorio",
              },
            })}
          />
          {
            <p className="text-muted">
              {errors.password?.type === "required" && errors.password?.message}
            </p>
          }
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Acepto los términos y condiciones"
            onChange={handleInputChange}
            rules="required"
            {...register("terms")}
          />

          {errors.terms && (
            <p className="error text-muted"> {errors.terms?.message} </p>
          )}
        </Form.Group>

        <Button variant="success form-control" type="submit">
          Registrar cuenta
        </Button>
        <div className="align-items-center mt-4">
          <GoogleButton
            type="light"
            label="Regístrate con Google"
            className="w-100 height-auto"
          ></GoogleButton>
        </div>
      </Form>
    </Fragment>
  );
};

export default FormularioLogin;
