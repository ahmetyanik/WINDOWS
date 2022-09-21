import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "./atoms/TextField";
import SelectItem from "./components/SelectItem";
import { university } from "./shared/mock/_selectExample";
import {
  Button,
  FormControlLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import { CheckBox } from "@mui/icons-material";

function Formik() {
  const initialValues = {
    firstName: "",
    lastName: "",
    university: "",
    password: "",
    confirmPassword: "",
    checkbox: false,
  };

  const validationSchema = yup.object({
    firstName: yup.string().required("Please enter your first name!"),
    lastName: yup.string().required("Please enter your last name!"),
    university: yup.string().required("Please enter your university!"),
    password: yup
      .string()
      .min(8, "Can be minimum 8 chars")
      .required("Please enter your password!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password field doesn't match!")
      .required("Please enter your confirm password!"),
    checkbox: yup.boolean().oneOf([true], "Please check the box!"),
  });

  const onSubmit = (values) => {
    console.log("values", values);
    console.log("Merhaba");
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div style={{ width: "200px", margin: "30px" }}>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            label="First Name"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          <SelectItem
            label="University"
            menuItems={university}
            name="university"
            value={formik.values.university}
            handleChange={formik.handleChange}
            error={
              formik.touched.university && Boolean(formik.errors.university)
            }
            helperText={formik.touched.university && formik.errors.university}
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
          <FormGroup>
            <FormControlLabel
              control={<CheckBox checked={formik.values.checkbox} />}
              label="Onayliyorum"
              name="checkbox"
              onChange={formik.handleChange}
            />
            <FormHelperText error>{formik.errors.checkbox}</FormHelperText>
          </FormGroup>
        </div>
        <Button type="submit">Gönder</Button>
      </form>
    </div>
  );
}

export default Formik;
