const Footer = () => {
  return (
    <footer className="bg-[#10a4b0]  py-3  text-white">
      <div className="text-center text-sm ">
        <span className="font-bold text-lg mr-2">MySkill</span> &copy;{" "}
        {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
