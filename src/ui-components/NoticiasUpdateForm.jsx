/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Noticias } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function NoticiasUpdateForm(props) {
  const {
    id: idProp,
    noticias,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    titulo: "",
    contenido: "",
    imagen: "",
  };
  const [titulo, setTitulo] = React.useState(initialValues.titulo);
  const [contenido, setContenido] = React.useState(initialValues.contenido);
  const [imagen, setImagen] = React.useState(initialValues.imagen);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = noticiasRecord
      ? { ...initialValues, ...noticiasRecord }
      : initialValues;
    setTitulo(cleanValues.titulo);
    setContenido(cleanValues.contenido);
    setImagen(cleanValues.imagen);
    setErrors({});
  };
  const [noticiasRecord, setNoticiasRecord] = React.useState(noticias);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Noticias, idProp)
        : noticias;
      setNoticiasRecord(record);
    };
    queryData();
  }, [idProp, noticias]);
  React.useEffect(resetStateValues, [noticiasRecord]);
  const validations = {
    titulo: [{ type: "Required" }],
    contenido: [{ type: "Required" }],
    imagen: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          titulo,
          contenido,
          imagen,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Noticias.copyOf(noticiasRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "NoticiasUpdateForm")}
      {...rest}
    >
      <TextField
        label="Titulo"
        isRequired={true}
        isReadOnly={false}
        value={titulo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo: value,
              contenido,
              imagen,
            };
            const result = onChange(modelFields);
            value = result?.titulo ?? value;
          }
          if (errors.titulo?.hasError) {
            runValidationTasks("titulo", value);
          }
          setTitulo(value);
        }}
        onBlur={() => runValidationTasks("titulo", titulo)}
        errorMessage={errors.titulo?.errorMessage}
        hasError={errors.titulo?.hasError}
        {...getOverrideProps(overrides, "titulo")}
      ></TextField>
      <TextField
        label="Contenido"
        isRequired={true}
        isReadOnly={false}
        value={contenido}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              contenido: value,
              imagen,
            };
            const result = onChange(modelFields);
            value = result?.contenido ?? value;
          }
          if (errors.contenido?.hasError) {
            runValidationTasks("contenido", value);
          }
          setContenido(value);
        }}
        onBlur={() => runValidationTasks("contenido", contenido)}
        errorMessage={errors.contenido?.errorMessage}
        hasError={errors.contenido?.hasError}
        {...getOverrideProps(overrides, "contenido")}
      ></TextField>
      <TextField
        label="Imagen"
        isRequired={false}
        isReadOnly={false}
        value={imagen}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              titulo,
              contenido,
              imagen: value,
            };
            const result = onChange(modelFields);
            value = result?.imagen ?? value;
          }
          if (errors.imagen?.hasError) {
            runValidationTasks("imagen", value);
          }
          setImagen(value);
        }}
        onBlur={() => runValidationTasks("imagen", imagen)}
        errorMessage={errors.imagen?.errorMessage}
        hasError={errors.imagen?.hasError}
        {...getOverrideProps(overrides, "imagen")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || noticias)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || noticias) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
