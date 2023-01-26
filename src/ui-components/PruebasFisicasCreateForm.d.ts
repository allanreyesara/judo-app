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
export declare type PruebasFisicasCreateFormInputValues = {
    nombre?: string;
    resultado?: string;
};
export declare type PruebasFisicasCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    resultado?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PruebasFisicasCreateFormOverridesProps = {
    PruebasFisicasCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    resultado?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PruebasFisicasCreateFormProps = React.PropsWithChildren<{
    overrides?: PruebasFisicasCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PruebasFisicasCreateFormInputValues) => PruebasFisicasCreateFormInputValues;
    onSuccess?: (fields: PruebasFisicasCreateFormInputValues) => void;
    onError?: (fields: PruebasFisicasCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PruebasFisicasCreateFormInputValues) => PruebasFisicasCreateFormInputValues;
    onValidate?: PruebasFisicasCreateFormValidationValues;
} & React.CSSProperties>;
export default function PruebasFisicasCreateForm(props: PruebasFisicasCreateFormProps): React.ReactElement;
