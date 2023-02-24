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
export declare type CalendarioCreateFormInputValues = {
    nombre?: string;
    fecha?: string;
    lugar?: string;
};
export declare type CalendarioCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    fecha?: ValidationFunction<string>;
    lugar?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CalendarioCreateFormOverridesProps = {
    CalendarioCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    fecha?: PrimitiveOverrideProps<TextFieldProps>;
    lugar?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CalendarioCreateFormProps = React.PropsWithChildren<{
    overrides?: CalendarioCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CalendarioCreateFormInputValues) => CalendarioCreateFormInputValues;
    onSuccess?: (fields: CalendarioCreateFormInputValues) => void;
    onError?: (fields: CalendarioCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CalendarioCreateFormInputValues) => CalendarioCreateFormInputValues;
    onValidate?: CalendarioCreateFormValidationValues;
} & React.CSSProperties>;
export default function CalendarioCreateForm(props: CalendarioCreateFormProps): React.ReactElement;
