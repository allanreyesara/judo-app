/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Calendario } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CalendarioUpdateFormInputValues = {
    nombre?: string;
    fecha?: string;
    lugar?: string;
};
export declare type CalendarioUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    fecha?: ValidationFunction<string>;
    lugar?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CalendarioUpdateFormOverridesProps = {
    CalendarioUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    fecha?: PrimitiveOverrideProps<TextFieldProps>;
    lugar?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CalendarioUpdateFormProps = React.PropsWithChildren<{
    overrides?: CalendarioUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    calendario?: Calendario;
    onSubmit?: (fields: CalendarioUpdateFormInputValues) => CalendarioUpdateFormInputValues;
    onSuccess?: (fields: CalendarioUpdateFormInputValues) => void;
    onError?: (fields: CalendarioUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CalendarioUpdateFormInputValues) => CalendarioUpdateFormInputValues;
    onValidate?: CalendarioUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CalendarioUpdateForm(props: CalendarioUpdateFormProps): React.ReactElement;
