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
                    imgplayer {
                        url
                    }
                    btnagents
                    backgroundagents {
                        url
                    }
                    collectionagents {
                        url
                    }
                    textbiografia
                    textclass
                    textequip
                    paragraphagents
                }                
            }
        }

    `)

    const { btnagents, backgroundagents, collectionagents, textbiografia, textclass, textequip, paragraphagents, imgplayer, aboutparagraph,btnmain,imgagents,titleabout,imgmaps,imgmidia,imgnews,titleagents,titlemaps,titlemidia,titlenews,videoabout} = data.valorantdata.mains[0]

    return (
        <S.Container>
            <S.ContainerAbout>
                    <S.TitleAbout>{titleabout}</S.TitleAbout>
                <S.BoxContent>
                    <S.BoxAbout>
                        <S.ParagraphAbout>{aboutparagraph}</S.ParagraphAbout>
                    </S.BoxAbout>
                    <S.BoxImageAbout>
                        <S.Play src={imgplayer.url} alt="" />
                        <S.ImgVideo src={videoabout.url} alt=""/>
                    </S.BoxImageAbout>
                </S.BoxContent>
            </S.ContainerAbout>
            <S.ContainerCards>
                <S.Section>
                    <S.BoxCard>
                            <S.TitleCard>{titleagents}</S.TitleCard>
                        <S.BoxImage>
                            <S.Image src={imgagents.url} alt="" />
                        </S.BoxImage>
                        <S.BoxBtn>
                            <S.BtnMore>{btnmain}</S.BtnMore>
                        </S.BoxBtn>
                    </S.BoxCard>
                    <S.BoxCard>
                            <S.TitleCard>{titlemaps}</S.TitleCard>
                        <S.BoxImage>
                            <S.Image src={imgmaps.url} alt="" />
                        </S.BoxImage>
                        <S.BoxBtn>
                            <S.BtnMore>{btnmain}</S.BtnMore>
                        </S.BoxBtn>
                    </S.BoxCard>
                    <S.BoxCard>
                            <S.TitleCard>{titlemidia}</S.TitleCard>
                        <S.BoxImage>
                            <S.Image src={imgmidia.url} alt="" />
                        </S.BoxImage>
                        <S.BoxBtn>
                            <S.BtnMore>{btnmain}</S.BtnMore>
                        </S.BoxBtn>
                    </S.BoxCard>
                    <S.BoxCard>
                            <S.TitleCard>{titlenews}</S.TitleCard>
                        <S.BoxImage>
                            <S.Image src={imgnews.url} alt="" />
                        </S.BoxImage>
                        <S.BoxBtn>
                            <S.BtnMore>{btnmain}</S.BtnMore>
                        </S.BoxBtn>
                    </S.BoxCard>
                </S.Section>
            </S.ContainerCards>
            <S.ContainerAgents>
                <S.BoxTextAgents>
                    <S.TitleAgents>{titleagents}</S.TitleAgents>
                    <S.ParagraphAgents>{paragraphagents}</S.ParagraphAgents>
                    <S.BoxBtnAgent>
                        <S.BtnAgent>{btnagents}</S.BtnAgent>
                    </S.BoxBtnAgent>
                </S.BoxTextAgents>
                <S.BoxCollectionAgents>
                    <S.Agents src={collectionagents.url} alt=""/>
                </S.BoxCollectionAgents>
            </S.ContainerAgents>
        </S.Container>
    )
}

