import React from 'react'
import * as S from './styles'

import { graphql, useStaticQuery } from 'gatsby'

export function Footer() {

    const data = useStaticQuery(graphql`
        query {
            valorantdata {
                footers {
                    copyright
                    imgclassificacao {
                      url
                    }
                    imgdiscord {
                      url
                    }
                    imgfacebook {
                      url
                    }
                    imginstagram {
                      url
                    }
                    imgtwitter {
                      url
                    }
                    imgyoutube {
                      url
                    }
                    logoriot {
                      url
                    }
                    titledownload
                    titledownloadapp
                    titletorneio
                    titlesociais
                  }
            }
        }

    `)

    const { copyright, imgclassificacao, imgdiscord, imgfacebook, imginstagram, imgtwitter, imgyoutube, logoriot, titledownload, titledownloadapp, titletorneio, titlesociais } = data.valorantdata.footers[0]

    return (
        <S.Container>
          <S.BoxCenter>
            <S.BoxTitle>
              <S.TitleFooter>{titledownload}</S.TitleFooter>
              <S.TitleFooter>{titledownloadapp}</S.TitleFooter>
              <S.TitleFooter>{titletorneio}</S.TitleFooter>
            </S.BoxTitle>
            <figure>
              <S.LogoImage src={logoriot.url} alt="" />
            </figure>
            <S.BoxSocial>

            </S.BoxSocial>
            <S.BoxCopy>
              <figure>
                <S.ImageClass src={imgclassificacao.url} alt="" />
              </figure>
              <S.ParagraphCopy>{copyright}</S.ParagraphCopy>
            </S.BoxCopy>
          </S.BoxCenter>
        </S.Container>
    )
}

