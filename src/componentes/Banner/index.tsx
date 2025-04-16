import React from "react";
import "./Banner.css";

interface BannerProps {
  enderecoImagem: string;
  textoLaternativo?: string;
}

export const Banner = ({ enderecoImagem, textoLaternativo }: BannerProps) => {
  return (
    <header className="banner">
      {/* <img
        src="/imagens/banner.png"
        alt="O banner principal da página do Organo"
      /> */}
      <img src={enderecoImagem} alt={textoLaternativo} />
    </header>
  );
};
export default Banner;
