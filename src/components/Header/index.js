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
                  }
            }
        }

    `)

    const { btnhome, btnmidia, btnnews, btnplay, btnsocial, btnsuporte, imgbackground, imglogo, stitlebackground, textbackground, titlebackground } = data.valorantdata.headers[0]

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
                        <S.TitleB>{titlebackground}</S.TitleB>
                        <S.SubTitleB>{stitlebackground}</S.SubTitleB>
                        <S.ParagraphB>{textbackground}</S.ParagraphB>
                    </S.BoxText>
                    <S.BtnBackground>{btnplay}</S.BtnBackground>
                </S.BoxBackground>
            </S.SectionBackground>
            <p>oi</p>
        </div>
    )
}
