/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Calendario } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CalendarioUpdateForm(props) {
  const {
    id: idProp,
    calendario,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nombre: "",
    fecha: "",
    lugar: "",
  };
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [fecha, setFecha] = React.useState(initialValues.fecha);
  const [lugar, setLugar] = React.useState(initialValues.lugar);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = calendarioRecord
      ? { ...initialValues, ...calendarioRecord }
      : initialValues;
    setNombre(cleanValues.nombre);
    setFecha(cleanValues.fecha);
    setLugar(cleanValues.lugar);
    setErrors({});
  };
  const [calendarioRecord, setCalendarioRecord] = React.useState(calendario);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Calendario, idProp)
        : calendario;
      setCalendarioRecord(record);
    };
    queryData();
  }, [idProp, calendario]);
  React.useEffect(resetStateValues, [calendarioRecord]);
  const validations = {
    nombre: [],
    fecha: [],
    lugar: [],
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
          nombre,
          fecha,
          lugar,
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
            Calendario.copyOf(calendarioRecord, (updated) => {
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
      {...getOverrideProps(overrides, "CalendarioUpdateForm")}
      {...rest}
    >
      <TextField
        label="Nombre"
        isRequired={false}
        isReadOnly={false}
        value={nombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre: value,
              fecha,
              lugar,
            };
            const result = onChange(modelFields);
            value = result?.nombre ?? value;
          }
          if (errors.nombre?.hasError) {
            runValidationTasks("nombre", value);
          }
          setNombre(value);
        }}
        onBlur={() => runValidationTasks("nombre", nombre)}
        errorMessage={errors.nombre?.errorMessage}
        hasError={errors.nombre?.hasError}
        {...getOverrideProps(overrides, "nombre")}
      ></TextField>
      <TextField
        label="Fecha"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={fecha}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              fecha: value,
              lugar,
            };
            const result = onChange(modelFields);
            value = result?.fecha ?? value;
          }
          if (errors.fecha?.hasError) {
            runValidationTasks("fecha", value);
          }
          setFecha(value);
        }}
        onBlur={() => runValidationTasks("fecha", fecha)}
        errorMessage={errors.fecha?.errorMessage}
        hasError={errors.fecha?.hasError}
        {...getOverrideProps(overrides, "fecha")}
      ></TextField>
      <TextField
        label="Lugar"
        isRequired={false}
        isReadOnly={false}
        value={lugar}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              fecha,
              lugar: value,
            };
            const result = onChange(modelFields);
            value = result?.lugar ?? value;
          }
          if (errors.lugar?.hasError) {
            runValidationTasks("lugar", value);
          }
          setLugar(value);
        }}
        onBlur={() => runValidationTasks("lugar", lugar)}
        errorMessage={errors.lugar?.errorMessage}
        hasError={errors.lugar?.hasError}
        {...getOverrideProps(overrides, "lugar")}
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
          isDisabled={!(idProp || calendario)}
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
              !(idProp || calendario) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
