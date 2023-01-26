/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EntrenadorCreateFormInputValues = {
    nombre?: string;
    apellidos?: string;
    correo?: string;
    foto?: string;
};
export declare type EntrenadorCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    apellidos?: ValidationFunction<string>;
    correo?: ValidationFunction<string>;
    foto?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EntrenadorCreateFormOverridesProps = {
    EntrenadorCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    apellidos?: PrimitiveOverrideProps<TextFieldProps>;
    correo?: PrimitiveOverrideProps<TextFieldProps>;
    foto?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EntrenadorCreateFormProps = React.PropsWithChildren<{
    overrides?: EntrenadorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EntrenadorCreateFormInputValues) => EntrenadorCreateFormInputValues;
    onSuccess?: (fields: EntrenadorCreateFormInputValues) => void;
    onError?: (fields: EntrenadorCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EntrenadorCreateFormInputValues) => EntrenadorCreateFormInputValues;
    onValidate?: EntrenadorCreateFormValidationValues;
} & React.CSSProperties>;
export default function EntrenadorCreateForm(props: EntrenadorCreateFormProps): React.ReactElement;
