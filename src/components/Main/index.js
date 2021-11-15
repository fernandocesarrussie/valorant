import React from 'react'
import * as S from './styles'

import { graphql, useStaticQuery } from 'gatsby'

export function Main() {

    const data = useStaticQuery(graphql`
        query {
            valorantdata {
                mains {
                    aboutparagraph
                    btnmain
                    imgagents {
                      url
                    }
                    imgmaps {
                      url
                    }
                    imgmidia {
                      url
                    }
                    imgnews {
                      url
                    }
                    titleabout
                    titleagents
                    titlemaps
                    titlemidia
                    titlenews
                    videoabout {
                      url
                    }
                }                
            }
        }

    `)

    const { aboutparagraph,btnmain,imgagents,titleabout,imgmaps,imgmidia,imgnews,titleagents,titlemaps,titlemidia,titlenews,videoabout} = data.valorantdata.mains[0]

    return (
        <S.Container>
            <S.ContainerAbout>
                <S.BoxAbout>
                    <S.TitleAbout>{titleabout}</S.TitleAbout>
                    <S.ParagraphAbout>{aboutparagraph}</S.ParagraphAbout>
                </S.BoxAbout>
                <S.BoxImageAbout>
                    <img src={videoabout} alt=""/>
                </S.BoxImageAbout>
            </S.ContainerAbout>
            <S.ContainerCards>
                <S.BoxCard>
                    <S.BoxImage>
                        <S.Image src={imgagents.url} alt="" />
                    </S.BoxImage>
                    <h2>{titleagents}</h2>
                    <button>{btnmain}</button>
                </S.BoxCard>
                <S.BoxCard>
                    <S.BoxImage>
                        <S.Image src={imgmaps.url} alt="" />
                    </S.BoxImage>
                    <h2>{titlemaps}</h2>
                    <button>{btnmain}</button>
                </S.BoxCard>
                <S.BoxCard>
                    <S.BoxImage>
                        <S.Image src={imgnews.url} alt="" />
                    </S.BoxImage>
                    <h2>{titlenews}</h2>
                    <button>{btnmain}</button>
                </S.BoxCard>
                <S.BoxCard>
                    <S.BoxImage>
                        <S.Image src={imgmidia.url} alt="" />
                    </S.BoxImage>
                    <h2>{titlemidia}</h2>
                    <button>{btnmain}</button>
                </S.BoxCard>
            </S.ContainerCards>
        </S.Container>
    )
}

