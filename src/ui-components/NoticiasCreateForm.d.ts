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
export declare type NoticiasCreateFormInputValues = {
    titulo?: string;
    contenido?: string;
    imagen?: string;
};
export declare type NoticiasCreateFormValidationValues = {
    titulo?: ValidationFunction<string>;
    contenido?: ValidationFunction<string>;
    imagen?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoticiasCreateFormOverridesProps = {
    NoticiasCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    titulo?: PrimitiveOverrideProps<TextFieldProps>;
    contenido?: PrimitiveOverrideProps<TextFieldProps>;
    imagen?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NoticiasCreateFormProps = React.PropsWithChildren<{
    overrides?: NoticiasCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NoticiasCreateFormInputValues) => NoticiasCreateFormInputValues;
    onSuccess?: (fields: NoticiasCreateFormInputValues) => void;
    onError?: (fields: NoticiasCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NoticiasCreateFormInputValues) => NoticiasCreateFormInputValues;
    onValidate?: NoticiasCreateFormValidationValues;
} & React.CSSProperties>;
export default function NoticiasCreateForm(props: NoticiasCreateFormProps): React.ReactElement;
