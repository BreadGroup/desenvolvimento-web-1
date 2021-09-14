import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';

import Delmir from '../../assets/Delmir.jpeg';
import Fabio from '../../assets/Fabio.png';
import Isaque from '../../assets/Isaque.png';
import Rafael from '../../assets/Rafael.png';

export default function MediaCard() {
  return (
    <Stack
      alignItems="stretch"
      sx={{
        m: 1,
        p: 3,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <Card
        sx={{
          p: 3,
          maxWidth: '48%',
          marginTop: '64px',
          width: '48%',
        }}
      >
        <CardMedia component="img" height="300" image={Delmir} alt="Delmir" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Delmir da Costa Felipe
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Possui graduação em Química Bacharelado pela Universidade Federal de
            Mato Grosso do Sul (1997), licenciatura em Química pelo Programa de
            Formação de Professores para o Magistério da UCDB(1998) e Mestrado
            em Educação pela Universidade Federal de Mato Grosso do Sul (2004).
            Foi Diretor Geral do Instituto Federal de Educação, Ciência e
            Tecnologia - IFMS no campus de Aquidauana/MS de 15/10/2010 a
            29/04/2016. Foi Pró-Reitor de Ensino do IFMS de 23/052016 a
            11/12/2019.Tem experiência na área de Química, com ênfase em Ensino
            de Química, atuando principalmente nos seguintes temas: ensino de
            química, aprendizagem significativa, tecnologias educacionais,
            educação a distância, educação profissional, ensino e aprendizagem.
            Atualmente é professor do Ensino, Básico, Técnico e Tecnológico no
            campus Campo Grande do IFMS. Doutorando em Ensino de Ciências no
            INFI da UFMS - início 2020. Conselheiro Suplente do Conselho
            Superior do IFMS (Biênio 2013-2014). Presidente da Comissão de Ética
            do IFMS (Biênio 2013-2015). Conselheiro Titular do Conselho Superior
            (2015 e Biênio 2016 e 2017). Conselheiro Titular do Conselho de
            Ensino, Pesquisa e Extensão da UEMS (2017-2020). Presidente do
            Conselho de Ensino, Pesquisa e Extensão do IFMS (2017-2019). Membro
            do Colegiado do Programa de Pós-Graduação em Ensino de Ciências -
            INFI/UFMS (2021-2023)
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ p: 3, maxWidth: '48%', marginTop: '64px', width: '48%' }}>
        <CardMedia component="img" height="300" image={Fabio} alt="Delmir" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Fábio Luiz Faria da Silva
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Possui graduação em Engenharia da Computação - Faculdades Associadas
            de São Paulo (2006), especialização pela FACEL em Docência em
            Ciência e Tecnologia da Informação (2018) e especialização pela FIAR
            em Licenciatura Pedagógica em História. Atualmente é professor
            efetivo do IFMS. Tem experiência na área de Ciência da Computação,
            com ênfase em Análise e Desenvolvimento/Desenvolvimento Web.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ p: 3, maxWidth: '48%', marginTop: '64px', width: '48%' }}>
        <CardMedia component="img" height="300" image={Isaque} alt="Delmir" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Isaque Ferreira Silva Nunes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Estudante do IFMS. Possui conhecimento basico - intermediário nas
            linguagens de programação Java, C, Python. Possui conhecimento
            básico nas tecnologias Docker, Spring boot. Atualmente está
            aprendendo javascript, React, MongoDB e Node
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ p: 3, maxWidth: '48%', marginTop: '64px', width: '48%' }}>
        <CardMedia component="img" height="300" image={Rafael} alt="Delmir" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Rafael Todescato Freire Veiga
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Estudante do IFMS. Possui conhecimento básico/ Intermediário nas
            linguagens de programação: Java, Kotlin, Python. Também já utilizou
            Spring boot
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}
