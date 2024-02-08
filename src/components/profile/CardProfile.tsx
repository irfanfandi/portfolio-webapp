/* eslint-disable @next/next/no-img-element */
"use client";
import { formatDisplayDate } from "@/utils/functions";
import { Fragment, memo, useContext } from "react";
import { ProfileContext } from "./Context";

type Props = {};

const CardProfile = (props: Props) => {
  const { formData, setFormData } = useContext(ProfileContext);
  const { name, avatar, cover, title, description, portfolio } = formData;

  return (
    <Fragment>
      <div className="flex relative">
        <img
          src={cover || "/images/bg-default.png"}
          style={{
            backgroundPosition: "center",
          }}
          alt="cover"
          className="w-full h-56 rounded-t-xl object-cover"
        />
        <img
          src={avatar || "/images/avatar-default.png"}
          className="img-avatar"
          alt="avatar"
        />
      </div>
      <div className="container mt-20 px-auto">
        <p className="text-profile-name">{name || "Nama"}</p>
        <p className="text-profile-title">{title || "Title"}</p>
        <p className="text-profile-desc">{description || "Deskripsi"}</p>
      </div>
      <div className="container px-12 mt-6">
        {portfolio.length > 0 && (
          <h6 className="mb-2 text-portfolio">Portfolio</h6>
        )}

        <div className="container space-y-4">
          {portfolio.length > 0 &&
            portfolio.map((e: any) => (
              <div
                key={e.id}
                className="bg-white px-6 pt-2 pb-6  rounded-lg"
                style={{ boxShadow: "0px 4px 4px 0px #D7E1EE94" }}
              >
                <p className="text-jobs-title">{e.position || "Posisi"}</p>
                <p className="text-jobs-company">{e.company || "Perusahaan"}</p>
                <p className="text-jobs-range">
                  {e.start_date !== ""
                    ? formatDisplayDate(e.start_date)
                    : e.start_date}{" "}
                  -{" "}
                  {e.end_date !== ""
                    ? formatDisplayDate(e.end_date)
                    : e.end_date}
                </p>
                <p className="text-jobs-desc mt-2">{e.desc || "Deskirpsi"}</p>
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default memo(CardProfile);
