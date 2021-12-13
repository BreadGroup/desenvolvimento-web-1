import PaulMuller from "../../assets/Paul_Hermann_Müller_nobel.jpg";
import AgroBackground from "../../assets/Agrotoxico.jpg";
import AcidoDiclorofenoxiacetico from "../../assets/Acido_diclorofenoxiacetico.svg";
import StrobilurinA from "../../assets/StrobilurinA.svg";
import DDT from "../../assets/DDT.svg";
import Cipermetrina from "../../assets/Cipermetrina.svg";
import Aldicarbe from "../../assets/Aldicarbe.svg";

import "./style.css";

const Home = () => {
  return (
    <main className="w-[calc(100vw-56px] ml-[56px] px-5 mt-[56px]">
      <section className="home-section">
        <h2 className="home-section-title self-center">
          Conceitos gerais sobre agrotóxicos
        </h2>
        <div className="home-section-content">
          <p>
            Agrotóxicos são, segundo o Ministério da Agricultura, Pecuária e
            Abastecimento, produtos químicos, físicos ou biológicos utilizados
            nos setores de produção agrícola, pastagens, entre outros, com o
            objetivo de alterar a composição química tanto da flora quanto da
            fauna a fim de preservá-las.
          </p>
          <img
            src={AgroBackground}
            alt="Produtor aplicando agrotóxicos em lavoura"
            className="w-[90vh] self-center p-4"
          />
        </div>
      </section>
      <section className="home-section">
        <h2 className="home-section-title">Contexto Histórico</h2>
        <section className="home-section">
          <h3 className="home-subsection-title">Inicio</h3>
          <div className="home-section-content">
            <p>
              Durante a Primeira Guerra Mundial os agrotóxicos foram criados,
              mas foram mais amplamente utilizados durante a Segunda Guerra
              Mundial como um tipo de arma química. Quando a guerra teve fim os
              produtos passaram a ser utilizados como defensivos agrícolas. A
              história desses defensivos remonta a muitos anos, o primeiro
              agrotóxico que era composto orgânico DDT foi desenvolvido no ano
              de 1874 por Othomar Zeidler. Contudo foi somente em 1939 que Paul
              Muller percebeu que o composto poderia ser utilizado como um tipo
              de inseticida.
            </p>
          </div>
        </section>
        <section className="home-section">
          <h3 className="home-subsection-title">O nobel de Química</h3>
          <div className="home-section-content">
            <div className="home-section-content-text">
              <p>
                No ano de 1948 Paul Muller recebei o Nobel de Química por ter
                descoberto e aplicado o DDT para combater insetos. O composto
                DDT era utilizado em larga escala para combater o inseto
                responsável por espalhar a malária. Porém, depois de algum tempo
                descobriu-se que assim como todos os outros compostos
                organoclorados, o DDT, é teratogênico, cancerígeno e se acumula
                no organismo.
              </p>
            </div>
            <img
              src={PaulMuller}
              alt="Paul Muller"
              className="w-56 border-4 rounded-xl self-center"
            />
          </div>
        </section>
        <section className="home-section">
          <h3 className="home-subsection-title">
            A Contaminação do Meio Ambiente no Brasil
          </h3>
          <div className="home-section-content">
            <p>
              Com essa ‘obrigação’ de comprar e usar os agrotóxicos os
              agricultores acabaram gerando uma grande contaminação do meio
              ambiente mesmo sem saber. Na Europa não foi muito diferente. Além
              dos problemas ambientais é necessário observar que a fome de todos
              os famintos não teve fim. Os países europeus trabalham na busca
              por tentar amenizar o problema da degradação do meio ambiente,
              porém, no Brasil essa situação parece que somente piora a cada ano
              que passa. Para se ter uma ideia na década de 70 a Europa
              transferiu fábricas poluentes de agrotóxicos para o Brasil que as
              aceitou de braços abertos por ser um dos cinco maiores
              consumidores de agrotóxicos na agricultura do mundo.
            </p>
          </div>
        </section>
      </section>
      <section className="home-section">
        <h2 className="home-section-title">
          Exemplos dos tipos de agrotóxicos
        </h2>
        <div className="home-section-content">
          <ul className="grid grid-cols-1 md:grid-cols-2 autofill justify-items-center md:gap-10 gap-0 list-inside">
            <li>
              {/* fungicidas (atingem fungos) <strong>Estrobilurinas</strong>; */}
              <figure>
                <img
                  src={StrobilurinA}
                  alt="StrobilurinA"
                  className="chemisty-structure"
                />
                <caption>Estrobilurina A (Fungicida)</caption>
              </figure>
            </li>
            <li>
              <figure>
                <img
                  src={AcidoDiclorofenoxiacetico}
                  alt="Ácido diclorofenoxiacético"
                  className="chemisty-structure"
                />
                <caption>Ácido diclorofenoxiacético (Herbicida)</caption>
              </figure>
            </li>
            <li>
              {/* inseticidas (atingem insetos) <strong>DTT</strong>; */}
              <figure>
                <img src={DDT} alt="DDT" className="chemisty-structure" />
                <caption>DDT (Inseticida)</caption>
              </figure>
            </li>
            <li>
              {/* acaricidas (atingem ácaros); <strong>Ácido metanoico</strong> */}
              <figure>
                <img
                  src={Cipermetrina}
                  alt="Cipermetrina"
                  className="chemisty-structure"
                />
                <caption>Ácido metanoico (Acaricida)</caption>
              </figure>
            </li>
            <li className="col-auto md:col-span-2">
              {/* rodenticidas (atingem roedores). <strong>Aldicarbe</strong> */}
              <figure>
                <img
                  src={Aldicarbe}
                  alt="Aldicarbe"
                  className="chemisty-structure"
                />
                <caption>Aldicarbe (rodenticidas)</caption>
              </figure>
            </li>
          </ul>
        </div>
      </section>
      <section className="home-section">
        <h2 className="home-section-title">Classificações toxicológicas</h2>
        <div className="home-section-content">
          <div className="home-section-content-text">
            <p>
              A toxicidade da maioria dos agrotóxicos é expressa em valores
              referentes à Dose Média Letal (DL50), por via oral, representada
              por miligramas do ingrediente ativo do produto por quilograma de
              peso vivo, necessários para matar 50% da população de ratos ou de
              outro animal teste. A DL50 é usada para estabelecer as medidas de
              segurança a serem seguidas para reduzir os riscos que o produto
              pode apresentar à saúde humana.
            </p>
            <p>
              Os agrotóxicos são agrupados em classes, de acordo com a sua
              toxicidade.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="home-section-title">Classificação toxicológica</h2>
        <div>
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                "\n.tg  {border-collapse:collapse;border-color:#ccc;border-spacing:0;}\n.tg td{border-color:#ccc;border-style:solid;border-width:1px;\n  font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg th{border-color:#ccc;border-style:solid;border-width:1px;\n  font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}\n.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}\n",
            }}
          />
          <table className="tg">
            <thead>
              <tr>
                <th className="tg-0pky">I</th>
                <th className="tg-0pky">
                  <span style={{ fontWeight: "bolder" }}>
                    Extremamente tóxico:{" "}
                  </span>
                  as fórmulas sólidas que apresentam DL 50 oral, para ratos,
                  igual ou inferior a 5mg/kg;
                </th>
                <th className="tg-0pky">
                  <span style={{ fontWeight: 400, fontStyle: "normal" }}>
                    Vermelho vivo
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tg-0pky">II</td>
                <td className="tg-0pky">
                  <span style={{ fontWeight: "bolder", fontStyle: "normal" }}>
                    Altamente tóxico:{" "}
                  </span>
                  as formulações sólidas que apresentam DL 50 oral, para ratos,
                  superiores a 5mg/kg e até 50mg/kg, inclusive
                </td>
                <td className="tg-0pky">
                  <span style={{ fontWeight: 400, fontStyle: "normal" }}>
                    Amarelo intenso
                  </span>
                </td>
              </tr>
              <tr>
                <td className="tg-0pky">III</td>
                <td className="tg-0pky">
                  <span style={{ fontWeight: "bolder", fontStyle: "normal" }}>
                    Medianamente tóxico:{" "}
                  </span>
                  as formulações sólidas que apresentam DL 50 oral, para ratos,
                  superior a 50mg/kg e até 5000mg/kg, inclusive;
                </td>
                <td className="tg-0pky">
                  <span style={{ fontWeight: 400, fontStyle: "normal" }}>
                    Verde intenso
                  </span>
                </td>
              </tr>
              <tr>
                <td className="tg-0pky">IV</td>
                <td className="tg-0pky">
                  <span style={{ fontWeight: "bolder", fontStyle: "normal" }}>
                    Pouco tóxico:{" "}
                  </span>
                  as formulaç~eos sólidas que apresentam DL 50 oral, para ratos,
                  superior a 5000mg/kg, inclusive
                </td>
                <td className="tg-0pky">
                  <span style={{ fontWeight: 400, fontStyle: "normal" }}>
                    Azul intenso
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export { Home };
