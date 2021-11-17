import React from 'react'
import * as S from './styles'

import { graphql, useStaticQuery } from 'gatsby'

export function Header() {

    const data = useStaticQuery(graphql`
        query {
            valorantdata {
                headers {
                    btnhome
                    btnmidia
                    btnnews
                    btnplay
                    btnsocial
                    btnsuporte
                    imgbackground {
                      url
                    }
                    imglogo {
                      url
                    }
                    stitlebackground
                    textbackground
                    titlebackground
                    imgtitle {
                        url
                    }
                  }
            }
        }

    `)

    const {video, imgtitle, btnhome, btnmidia, btnnews, btnplay, btnsocial, btnsuporte, imgbackground, imglogo, stitlebackground, textbackground, titlebackground } = data.valorantdata.headers[0]

    return (
        <div>
            <S.SectionHeader>
                <div>
                    <S.Logo src={imglogo.url} alt=""/>
                </div>
                <S.Navegation>
                    <S.BtnNav>{btnhome}</S.BtnNav>
                    <S.BtnNav>{btnnews}</S.BtnNav>
                    <S.BtnNav>{btnmidia}</S.BtnNav>
                    <S.BtnNav>{btnsocial}</S.BtnNav>
                    <S.BtnNav>{btnsuporte}</S.BtnNav>
                </S.Navegation>
                <div>
                    <S.BtnPlay>{btnplay}</S.BtnPlay>
                </div>
            </S.SectionHeader>
            <S.SectionBackground back={imgbackground.url}>
                <S.BoxBackground>
                    <S.BoxText>
                        <S.ImgTitle src={imgtitle.url}/>
                        <S.SubTitleB>{stitlebackground}</S.SubTitleB>
                    </S.BoxText>
                    <S.BorderBtn>
                        <S.BtnBackground>{btnplay}</S.BtnBackground>
                    </S.BorderBtn>
                </S.BoxBackground>
            </S.SectionBackground>
        </div>
    )
}
