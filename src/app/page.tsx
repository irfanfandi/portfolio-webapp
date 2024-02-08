"use client";
import ReInput from "@/components/ReInput";
import ReTextArea from "@/components/ReTextArea";
import ReUpload from "@/components/ReUpload";
import CardProfile from "@/components/profile/CardProfile";
import { ProfileContext } from "@/components/profile/Context";
import { RootState } from "@/store";
import { setUserData } from "@/store/generalSlice";
import { delayFn } from "@/utils/functions";
import { Fragment, ReactNode, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../style/profile.css";

const CardInput = ({
  children,
  title,
  isPortfolio,
  handleDeletePortfolio,
}: {
  children: ReactNode;
  title: string;
  isPortfolio?: boolean;
  handleDeletePortfolio?: () => void;
}) => {
  const [isShow, setIsShow] = useState(true);

  const handleClickMinimize = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="container card flex-col pt-8 pb-6 px-6 bg-white  rounded-xl">
      <div className="flex items-center justify-between">
        <h6 className="border-b border-black">{title}</h6>
        <div className="flex-row items-center space-x-4">
          <button type="button" onClick={handleClickMinimize}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_914_24"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_914_24)">
                <path
                  d="M13 12C12.7167 12 12.4793 11.904 12.288 11.712C12.096 11.5207 12 11.2833 12 11V4.99999C12 4.71665 12.096 4.47899 12.288 4.28699C12.4793 4.09565 12.7167 3.99999 13 3.99999C13.2833 3.99999 13.521 4.09565 13.713 4.28699C13.9043 4.47899 14 4.71665 14 4.99999V8.59999L19.9 2.69999C20.0833 2.51665 20.3167 2.42499 20.6 2.42499C20.8833 2.42499 21.1167 2.51665 21.3 2.69999C21.4833 2.88332 21.575 3.11665 21.575 3.39999C21.575 3.68332 21.4833 3.91665 21.3 4.09999L15.4 9.99999H19C19.2833 9.99999 19.5207 10.0957 19.712 10.287C19.904 10.479 20 10.7167 20 11C20 11.2833 19.904 11.5207 19.712 11.712C19.5207 11.904 19.2833 12 19 12H13ZM2.7 21.3C2.51667 21.1167 2.425 20.8833 2.425 20.6C2.425 20.3167 2.51667 20.0833 2.7 19.9L8.6 14H5C4.71667 14 4.479 13.904 4.287 13.712C4.09567 13.5207 4 13.2833 4 13C4 12.7167 4.09567 12.479 4.287 12.287C4.479 12.0957 4.71667 12 5 12H11C11.2833 12 11.521 12.0957 11.713 12.287C11.9043 12.479 12 12.7167 12 13V19C12 19.2833 11.9043 19.5207 11.713 19.712C11.521 19.904 11.2833 20 11 20C10.7167 20 10.4793 19.904 10.288 19.712C10.096 19.5207 10 19.2833 10 19V15.4L4.1 21.3C3.91667 21.4833 3.68333 21.575 3.4 21.575C3.11667 21.575 2.88333 21.4833 2.7 21.3Z"
                  fill="#6C7074"
                />
              </g>
            </svg>
          </button>
          {isPortfolio && (
            <button type="button" onClick={handleDeletePortfolio}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.71 8.28999C15.617 8.19626 15.5064 8.12187 15.3846 8.0711C15.2627 8.02033 15.132 7.99419 15 7.99419C14.868 7.99419 14.7373 8.02033 14.6154 8.0711C14.4936 8.12187 14.383 8.19626 14.29 8.28999L12 10.59L9.71 8.28999C9.5217 8.10168 9.2663 7.9959 9 7.9959C8.7337 7.9959 8.4783 8.10168 8.29 8.28999C8.1017 8.47829 7.99591 8.73369 7.99591 8.99999C7.99591 9.26629 8.1017 9.52168 8.29 9.70999L10.59 12L8.29 14.29C8.19627 14.383 8.12188 14.4936 8.07111 14.6154C8.02034 14.7373 7.9942 14.868 7.9942 15C7.9942 15.132 8.02034 15.2627 8.07111 15.3846C8.12188 15.5064 8.19627 15.617 8.29 15.71C8.38296 15.8037 8.49356 15.8781 8.61542 15.9289C8.73728 15.9796 8.86799 16.0058 9 16.0058C9.13201 16.0058 9.26272 15.9796 9.38458 15.9289C9.50643 15.8781 9.61704 15.8037 9.71 15.71L12 13.41L14.29 15.71C14.383 15.8037 14.4936 15.8781 14.6154 15.9289C14.7373 15.9796 14.868 16.0058 15 16.0058C15.132 16.0058 15.2627 15.9796 15.3846 15.9289C15.5064 15.8781 15.617 15.8037 15.71 15.71C15.8037 15.617 15.8781 15.5064 15.9289 15.3846C15.9797 15.2627 16.0058 15.132 16.0058 15C16.0058 14.868 15.9797 14.7373 15.9289 14.6154C15.8781 14.4936 15.8037 14.383 15.71 14.29L13.41 12L15.71 9.70999C15.8037 9.61702 15.8781 9.50642 15.9289 9.38456C15.9797 9.26271 16.0058 9.132 16.0058 8.99999C16.0058 8.86798 15.9797 8.73727 15.9289 8.61541C15.8781 8.49355 15.8037 8.38295 15.71 8.28999ZM19.07 4.92999C18.1475 3.97489 17.0441 3.21306 15.824 2.68897C14.604 2.16488 13.2918 1.88902 11.964 1.87748C10.6362 1.86595 9.31942 2.11896 8.09046 2.62177C6.8615 3.12458 5.74498 3.86711 4.80605 4.80604C3.86712 5.74497 3.12459 6.86148 2.62178 8.09045C2.11897 9.31941 1.86596 10.6362 1.87749 11.964C1.88903 13.2918 2.1649 14.604 2.68899 15.824C3.21308 17.0441 3.9749 18.1475 4.93 19.07C5.85247 20.0251 6.95591 20.7869 8.17595 21.311C9.39599 21.8351 10.7082 22.111 12.036 22.1225C13.3638 22.134 14.6806 21.881 15.9095 21.3782C17.1385 20.8754 18.255 20.1329 19.194 19.1939C20.1329 18.255 20.8754 17.1385 21.3782 15.9095C21.881 14.6806 22.134 13.3638 22.1225 12.036C22.111 10.7082 21.8351 9.39598 21.311 8.17594C20.7869 6.9559 20.0251 5.85246 19.07 4.92999ZM17.66 17.66C16.352 18.9694 14.6305 19.7848 12.7888 19.9673C10.947 20.1498 9.099 19.688 7.55952 18.6608C6.02004 17.6335 4.88436 16.1042 4.34597 14.3335C3.80759 12.5627 3.8998 10.6601 4.60691 8.94977C5.31402 7.23941 6.59227 5.82714 8.22389 4.95355C9.85551 4.07996 11.7395 3.79912 13.555 4.15886C15.3705 4.5186 17.005 5.49668 18.1802 6.92645C19.3554 8.35622 19.9985 10.1492 20 12C20.0036 13.0513 19.7986 14.0928 19.3969 15.0644C18.9953 16.0359 18.4049 16.9181 17.66 17.66Z"
                  fill="#f00"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
      {isShow && <div className="flex-col mt-4 space-y-6">{children}</div>}
    </div>
  );
};

export default function Home() {
  const { user }: any = useSelector((state: RootState) => state.general);
  const dispatch = useDispatch();
  const [loading, setloading] = useState(true);
  const [loadingBtn, setloadingBtn] = useState(false);
  const [formData, setFormData] = useState<any>({
    name: "",
    title: "",
    description: "",
    avatar: "",
    cover: "",
    portfolio: [],
  });

  const fetchData = () => {
    try {
      if (user) {
        dispatch(setUserData(user));
        setFormData(JSON.parse(JSON.stringify(user)));
        return;
      }
      dispatch(setUserData(formData));
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setloadingBtn(true);
    try {
      await delayFn(1000);
      dispatch(setUserData(formData));
    } catch (error: any) {
      alert("Failed");
      console.log(error);
    } finally {
      setloadingBtn(false);
    }
  };

  const handleAddPortfolio = () => {
    setFormData((prev: any) => {
      return {
        ...prev,
        portfolio: [
          ...prev.portfolio,
          {
            id: Math.floor(Math.random() * 1000),
            position: "",
            company: "",
            start_date: "",
            end_date: "",
            desc: "",
          },
        ],
      };
    });
  };

  const handleDeletePortfolio = (id: number) => {
    setFormData((prev: any) => {
      return {
        ...prev,
        portfolio: formData.portfolio.filter((e: any) => e.id != id),
      };
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const memoCardProfile = useMemo(
    () => (
      <div className="container max-h-[1200px] overflow-y-auto card md:basis-2/4  gap-4 rounded-xl bg-white pb-4">
        <ProfileContext.Provider
          value={{
            formData,
            setFormData,
          }}
        >
          <CardProfile />
        </ProfileContext.Provider>
      </div>
    ),
    [formData]
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="dot-flashing"></div>
      </div>
    );
  }

  return (
    <Fragment>
      <div className="flex">
        <button
          form="profile-form"
          type="submit"
          disabled={loadingBtn}
          className="btn-save"
        >
          {loadingBtn ? "Menyimpan..." : "Simpan Perubahan"}
        </button>
      </div>
      <div className="container flex-row md:flex  space-y-6 md:space-y-0 justify-between mt-8 gap-8">
        {/* FORM */}
        <form id="profile-form" onSubmit={handleSubmit}>
          <div className="container md:basis-3/4  flex-col space-y-6">
            <CardInput title="Backgound Image">
              <ReUpload
                onFinish={(value) => {
                  if (value) {
                    setFormData((prev: any) => {
                      return { ...prev, cover: value };
                    });
                  }
                }}
              />
            </CardInput>
            <CardInput title="Profile Image">
              <ReUpload
                onFinish={(value) => {
                  if (value) {
                    setFormData((prev: any) => {
                      return { ...prev, avatar: value };
                    });
                  }
                }}
              />
            </CardInput>
            <CardInput title="Profile">
              <ReInput
                defaultValue={formData.name}
                onFinish={(value) => {
                  if (value) {
                    setFormData((prev: any) => {
                      return { ...prev, name: value };
                    });
                  }
                }}
                placeholder="Nama"
              />
              <ReInput
                defaultValue={formData.title}
                onFinish={(value) => {
                  if (value) {
                    setFormData((prev: any) => {
                      return { ...prev, title: value };
                    });
                  }
                }}
                placeholder="Title / Posisi"
              />
              <ReTextArea
                defaultValue={formData.description}
                onFinish={(value) => {
                  if (value) {
                    setFormData((prev: any) => {
                      return { ...prev, description: value };
                    });
                  }
                }}
                placeholder="Deskripsi"
              />
            </CardInput>
            {/* PORTFOLIO */}
            <button
              type="button"
              className="btn-add-portfolio w-full"
              disabled={formData.portfolio.length > 9}
              onClick={handleAddPortfolio}
            >
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 14C7.21667 14 6.97933 13.904 6.788 13.712C6.596 13.5207 6.5 13.2833 6.5 13V8H1.5C1.21667 8 0.979 7.904 0.787 7.712C0.595667 7.52067 0.5 7.28333 0.5 7C0.5 6.71667 0.595667 6.479 0.787 6.287C0.979 6.09567 1.21667 6 1.5 6H6.5V1C6.5 0.716667 6.596 0.479 6.788 0.287C6.97933 0.0956668 7.21667 0 7.5 0C7.78333 0 8.021 0.0956668 8.213 0.287C8.40433 0.479 8.5 0.716667 8.5 1V6H13.5C13.7833 6 14.0207 6.09567 14.212 6.287C14.404 6.479 14.5 6.71667 14.5 7C14.5 7.28333 14.404 7.52067 14.212 7.712C14.0207 7.904 13.7833 8 13.5 8H8.5V13C8.5 13.2833 8.40433 13.5207 8.213 13.712C8.021 13.904 7.78333 14 7.5 14Z"
                  fill={formData.portfolio.length > 9 ? "#919eabcc" : "#10A4B0"}
                />
              </svg>
              Add Portfolio
            </button>
            {formData.portfolio.length > 0 &&
              formData.portfolio.map((e: any, idx: number) => (
                <CardInput
                  key={e.id}
                  title={`Porfolio ${idx + 1}`}
                  isPortfolio={true}
                  handleDeletePortfolio={() => {
                    handleDeletePortfolio(e.id);
                  }}
                >
                  <ReInput
                    defaultValue={formData.portfolio[idx].position}
                    onFinish={(value) => {
                      if (value) {
                        formData.portfolio[idx].position = value;
                        setFormData((prev: any) => {
                          return { ...prev };
                        });
                      }
                    }}
                    placeholder="Posisi"
                  />
                  <ReInput
                    defaultValue={formData.portfolio[idx].company}
                    onFinish={(value) => {
                      if (value) {
                        formData.portfolio[idx].company = value;
                        setFormData((prev: any) => {
                          return { ...prev };
                        });
                      }
                    }}
                    placeholder="Perusahaan"
                  />
                  <div className="flex-row md:flex md:gap-4 space-y-4 md:space-y-0">
                    <div className="w-full md:w-1/2">
                      <ReInput
                        defaultValue={formData.portfolio[idx].start_date}
                        type="date"
                        onFinish={(value) => {
                          if (value) {
                            formData.portfolio[idx].start_date = value;
                            setFormData((prev: any) => {
                              return { ...prev };
                            });
                          }
                        }}
                        placeholder="Tanggal Mulai"
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <ReInput
                        type="date"
                        defaultValue={formData.portfolio[idx].end_date}
                        onFinish={(value) => {
                          if (value) {
                            formData.portfolio[idx].end_date = value;
                            setFormData((prev: any) => {
                              return { ...prev };
                            });
                          }
                        }}
                        placeholder="Tanggal Selesai"
                      />
                    </div>
                  </div>
                  <ReTextArea
                    defaultValue={formData.portfolio[idx].desc}
                    onFinish={(value) => {
                      if (value) {
                        formData.portfolio[idx].desc = value;
                        setFormData((prev: any) => {
                          return { ...prev };
                        });
                      }
                    }}
                    placeholder="Deskripsi"
                  />
                </CardInput>
              ))}
          </div>
        </form>
        {/* CARD PROFILE */}
        {memoCardProfile}
      </div>
    </Fragment>
  );
}
