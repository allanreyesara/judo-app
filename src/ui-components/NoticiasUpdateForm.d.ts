/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Noticias } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NoticiasUpdateFormInputValues = {
    titulo?: string;
    contenido?: string;
    imagen?: string;
};
export declare type NoticiasUpdateFormValidationValues = {
    titulo?: ValidationFunction<string>;
    contenido?: ValidationFunction<string>;
    imagen?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoticiasUpdateFormOverridesProps = {
    NoticiasUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    titulo?: PrimitiveOverrideProps<TextFieldProps>;
    contenido?: PrimitiveOverrideProps<TextFieldProps>;
    imagen?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NoticiasUpdateFormProps = React.PropsWithChildren<{
    overrides?: NoticiasUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    noticias?: Noticias;
    onSubmit?: (fields: NoticiasUpdateFormInputValues) => NoticiasUpdateFormInputValues;
    onSuccess?: (fields: NoticiasUpdateFormInputValues) => void;
    onError?: (fields: NoticiasUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NoticiasUpdateFormInputValues) => NoticiasUpdateFormInputValues;
    onValidate?: NoticiasUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NoticiasUpdateForm(props: NoticiasUpdateFormProps): React.ReactElement;
