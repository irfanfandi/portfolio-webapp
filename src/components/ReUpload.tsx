/* eslint-disable react/display-name */
"use client";

import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

type Props = {
  defaultValue?: any;
  onFinish?: (value: any) => void;
};

export type UploadHandle = {
  setDefaultValue: (params: any) => void;
  getValue: () => any;
  getFileName: () => any;
};

const ReUpload = forwardRef<UploadHandle, Props>((props, ref) => {
  const [value, setValue] = useState<any>(props?.defaultValue || null);
  const [fileName, setfileName] = useState<any>(null);

  useImperativeHandle(ref, (): any => ({
    getValue() {
      return value;
    },
    getFileName() {
      return fileName;
    },
    setDefaultValue(params: any) {
      setValue(params);
    },
  }));

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (event: any) => {
    const file = event.target?.files[0] || null;

    if (file?.size > 1000000) {
      alert("Maaf, file tidak boleh lebih dari 1MB");
      return;
    }
    if (file) {
      try {
        const base64 = await convertBase64(file);
        setfileName(file?.name);
        setValue(base64);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (props.onFinish) {
      if (value !== undefined) props.onFinish(value);
    }
  }, [value]);

  return (
    <div className="flex items-center justify-center w-full">
      <label className="flex flex-col items-center justify-center w-full h-64 rounded-lg cursor-pointer bg-[#EBEBEB] dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_1_1562"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="25"
              height="24"
            >
              <rect x="0.155426" width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1_1562)">
              <path
                d="M7.65543 17.5C6.12209 17.5 4.82209 16.9667 3.75543 15.9C2.68876 14.8333 2.15543 13.5333 2.15543 12C2.15543 10.4667 2.68876 9.16667 3.75543 8.1C4.82209 7.03333 6.12209 6.5 7.65543 6.5H18.1554C19.2554 6.5 20.1971 6.89167 20.9804 7.675C21.7638 8.45833 22.1554 9.4 22.1554 10.5C22.1554 11.6 21.7638 12.5417 20.9804 13.325C20.1971 14.1083 19.2554 14.5 18.1554 14.5H8.65543C7.95543 14.5 7.36376 14.2583 6.88043 13.775C6.39709 13.2917 6.15543 12.7 6.15543 12C6.15543 11.3 6.39709 10.7083 6.88043 10.225C7.36376 9.74167 7.95543 9.5 8.65543 9.5H17.4054C17.6221 9.5 17.8013 9.57083 17.9429 9.7125C18.0846 9.85417 18.1554 10.0333 18.1554 10.25C18.1554 10.4667 18.0846 10.6458 17.9429 10.7875C17.8013 10.9292 17.6221 11 17.4054 11H8.65543C8.37209 11 8.13459 11.0958 7.94293 11.2875C7.75126 11.4792 7.65543 11.7167 7.65543 12C7.65543 12.2833 7.75126 12.5208 7.94293 12.7125C8.13459 12.9042 8.37209 13 8.65543 13H18.1554C18.8554 13 19.4471 12.7583 19.9304 12.275C20.4138 11.7917 20.6554 11.2 20.6554 10.5C20.6554 9.8 20.4138 9.20833 19.9304 8.725C19.4471 8.24167 18.8554 8 18.1554 8H7.65543C6.55543 8 5.61376 8.39167 4.83043 9.175C4.04709 9.95833 3.65543 10.9 3.65543 12C3.65543 13.1 4.04709 14.0417 4.83043 14.825C5.61376 15.6083 6.55543 16 7.65543 16H17.4054C17.6221 16 17.8013 16.0708 17.9429 16.2125C18.0846 16.3542 18.1554 16.5333 18.1554 16.75C18.1554 16.9667 18.0846 17.1458 17.9429 17.2875C17.8013 17.4292 17.6221 17.5 17.4054 17.5H7.65543Z"
                fill="#717984"
              />
            </g>
          </svg>
          {fileName ? (
            <p className="mb-2 text-sm text-upload underline">{fileName}</p>
          ) : (
            <>
              <p className="mb-2 text-sm text-upload underline">
                Drag and drop files, or
                <span className="text-blue-500"> Browse</span>
              </p>
              <p className="underline text-information-upload">
                Support formats : png, jpg, jpeg, mp4.
              </p>
              <p className="underline text-information-upload">
                Max size : 1MB
              </p>
            </>
          )}
        </div>
        <input
          accept="image/png, image/jpeg, image/jpg, image/mp4"
          id="dropzoneFile"
          type="file"
          onChange={(e) => {
            uploadImage(e);
          }}
          className="hidden"
        />
      </label>
    </div>
  );
});

export default ReUpload;
