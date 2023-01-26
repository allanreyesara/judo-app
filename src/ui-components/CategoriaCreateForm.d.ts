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
export declare type CategoriaCreateFormInputValues = {
    nombre?: string;
    peso_max?: number;
    peso_min?: number;
};
export declare type CategoriaCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    peso_max?: ValidationFunction<number>;
    peso_min?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CategoriaCreateFormOverridesProps = {
    CategoriaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    peso_max?: PrimitiveOverrideProps<TextFieldProps>;
    peso_min?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CategoriaCreateFormProps = React.PropsWithChildren<{
    overrides?: CategoriaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CategoriaCreateFormInputValues) => CategoriaCreateFormInputValues;
    onSuccess?: (fields: CategoriaCreateFormInputValues) => void;
    onError?: (fields: CategoriaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CategoriaCreateFormInputValues) => CategoriaCreateFormInputValues;
    onValidate?: CategoriaCreateFormValidationValues;
} & React.CSSProperties>;
export default function CategoriaCreateForm(props: CategoriaCreateFormProps): React.ReactElement;
