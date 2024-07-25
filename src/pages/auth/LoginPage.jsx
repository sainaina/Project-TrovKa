import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import {
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeOff,
} from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { Metadata } from "../../lib/Metadata";
import {
  fetchLogin,
  selectError,
  selectUsers,
} from "../../redux/feature/user/userSlice";

const LoginPage = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginStatus = useSelector(selectUsers);
  const loginError = useSelector(selectError);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = (values) => {
    dispatch(fetchLogin(values));
  };

  useEffect(() => {
    if (loginStatus === "success") {
      setShowSuccessPopup(true);
      setTimeout(() => {
        navigate("/");
      }, 2000); // Navigate after 2 seconds
    } else if (loginStatus === "failed") {
      setShowErrorPopup(true);
      setPopupMessage(
        typeof loginError === "string"
          ? loginError
          : loginError.message || "An error occurred"
      );
    }
  }, [loginStatus, loginError, navigate]);

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  const closeErrorPopup = () => {
    setShowErrorPopup(false);
  };

  return (
    <div>
      <div>
        <Metadata
          title="Login | TrovKa"
          description="Welcome to Service-TrovKa"
          author="SainaIna"
          keywords="services, trovka, home"
          thumbnail="https://i.ibb.co/s6D2gFC/trovka-icon.png"
        />
      </div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col md:flex-row w-full max-w-6xl rounded-2xl">
          {/* Left Side */}
          <div className="flex items-center justify-center w-full md:w-1/2 px-4 md:px-8">
            <div className="w-full max-w-md">
              {/* Adjust max width as needed */}
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ touched, errors }) => (
                  <Form className="flex flex-col text-xl">
                    <div className="flex items-center justify-center mb-6">
                      <img
                        src="public/image/logo/Trovka-logo-offcial.png"
                        alt="Logo"
                        className="h-12 rounded-full mb-1"
                      />
                    </div>

                    <label
                      htmlFor="email"
                      className="text-blue-900 dark:text-gray-300"
                    >
                      {t("Email")}
                    </label>
                    <div className="relative mt-2">
                      <MdEmail className="absolute dark:text-gray-200 left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        placeholder={t("Email")}
                        className={`pl-10 pr-2 py-2 bg-white rounded-xl w-full h-12 dark:bg-gray-800 ${
                          touched.email && errors.email ? "border-red-500" : ""
                        }`}
                        required
                      />
                    </div>
                    {touched.email && errors.email && (
                      <div className="text-sm text-red-500">{errors.email}</div>
                    )}

                    <label
                      htmlFor="password"
                      className="mt-6 text-blue-900 dark:text-gray-300"
                    >
                      {t("Password")}
                    </label>
                    <div className="relative mt-2">
                      <HiOutlineLockClosed className="absolute dark:text-gray-200 left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Field
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder={t("Password")}
                        className={`pl-10 pr-2 py-2 bg-white rounded-xl w-full h-12 dark:bg-gray-800 ${
                          touched.password && errors.password
                            ? "border-red-500"
                            : ""
                        }`}
                        required
                      />
                      <div
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <HiOutlineEyeOff className="dark:text-gray-200 text-gray-400" />
                        ) : (
                          <HiOutlineEye className="dark:text-gray-200text-gray-400" />
                        )}
                      </div>
                    </div>
                    {touched.password && errors.password && (
                      <div className="text-sm text-red-500">
                        {errors.password}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="mt-8 py-3 text-white bg-[#FFB600] rounded-xl w-full"
                    >
                      {t("Login")}
                    </button>

                    <div className="flex justify-center mt-4 text-lg">
                      <p className="text-black dark:text-gray-300">
                        {t("Dont_Have_Acc")}
                      </p>
                      <button
                        onClick={handleRegisterClick}
                        className="ml-2 text-[#FFB600]"
                      >
                        {t("Register")}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex md:w-1/2 justify-center items-center mt-8 md:mt-0">
            <img
              src="public/image/icon/register-icon.png"
              alt="Login Pic"
              className="w-96 rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Success Pop-up */}
      {showSuccessPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Success!</h2>
            {/* <p className="text-lg text-gray-800">{popupMessage}</p> */}
            <button
              onClick={closeSuccessPopup}
              className="mt-4 px-4 py-2 bg-[#FFB600] text-white rounded-xl"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Error Pop-up */}
      {showErrorPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Error!</h2>
            <p className="text-lg text-gray-800">{popupMessage}</p>
            <button
              onClick={closeErrorPopup}
              className="mt-4 px-4 py-2 bg-[#FFB600] text-white rounded-xl"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
