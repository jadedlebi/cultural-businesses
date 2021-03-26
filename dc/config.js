var config = {
    style: 'mapbox://styles/jedlebi/ckl18xqny08ni17tfux9mf7kw',
    accessToken: 'pk.eyJ1IjoiamVkbGViaSIsImEiOiJjanhhc3M4NnYwMmxsM3lyODlxYTFhOGRxIn0.746AmyW45uwRPeUy1PczOg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false,
    title: 'Culturally Significant Businesses',
    subtitle: '',
    byline: '',
    footer: 'Produced in collaboration with Dr. Sabiyha Prince.',
    chapters: [
        {   id: 'place-name',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:center;font-family:Palatino,serif;font-size:80px;margin-top:25px;font-style:italic;line-height:150px;>WASHINGTON, DC</span>',
            location: {
                center: [-77.02527, 38.89306],
                zoom: 11.43,
                pitch: 2,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                }
            ]
        },
        {   id: 'dc-subtitle',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:40px;margin-top:25px;font-style:bold;line-height:60px;>Businesses in DC are struggling due to the pandemic. Here are some of their stories.</span>',
            location: {
                center: [-77.02527, 38.89306],
                zoom: 11.43,
                pitch: 2,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                }
            ]
        },
        {   id: 'ncrc-logo',
            alignment: 'center',
            hidden: false,
            title: 'Produced by',
            image: './images/ncrc-logo.png',
            description: '',
            location: {
                center: [-77.02527, 38.89306],
                zoom: 11.43,
                pitch: 2,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                }
            ]
        },
        {   id: 'dc-segregation-image',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/old-u-street.png',
            description: 'The Republic Theatre on U Street, circa 1945-46. <cite><p style=line-height:4px;>Photograph by Robert H. McNeill, courtesy of Susan McNeill</cite></p>',
            location: {
                center: [-77.02527, 38.89306],
                zoom: 11.43,
                pitch: 2,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                }
            ]
        },
        {   id: 'dc-segregation-title',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=line-height:70px;margin-top:25px;display:block;text-align:center;font-family:Palatino,serif;font-size:80px;margin-top:25px;>DC & SEGREGATION</span>',
            location: {
                center: [-77.02527, 38.89306],
                zoom: 11.43,
                pitch: 2,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                }
            ]
        },
        {   id: 'dc-segregation-info-1',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>The Jim Crow era has brought many hardships to Black communities across the country. As murder and the destruction of Black-owned businesses fueled by racism persisted throughout the early 1900s, African Americans had to flee communities that were much more racially heterogeneous. These actions led to the establishment of large, segregated Black communities that were served by thriving Black businesses yet still vulnerable to the aggression of neighboring residents. One of the most notable of these attacks took place in 1921 in the Greenwood District of Tulsa, Oklahoma, now better known to the general public as “Black Wall Street.”</span>',
            location: {
                center: [-77.12, 38.902],
                zoom: 11.1,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'showLegend1',
            onChapterEnter: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                },

                {
                    layer: 'min-pop',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                },

                {
                    layer: 'min-pop',
                    opacity: 0,
                    duration: 500
                }
            ]
        },
        {   id: 'dc-segregation-info-2',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: "<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>Through the 1960s, DC had experienced an increase of job growth within the U.S. Government, attracting many families and individuals from everywhere in the country. This led many African American men, women, and children to migrate to Washington, DC during the Great Migration era. Although many escaped hardships in the American South, segregation was still deeply rooted in DC's structures. Most of the declining neighborhoods were in the southern portions of the city and most of their inhabitants were Black.</span>",
            location: {
                center: [-77.12, 38.902],
                zoom: 11.1,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'showLegend1',
            onChapterEnter: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                },

                {
                    layer: 'min-pop',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                },

                {
                    layer: 'min-pop',
                    opacity: 0,
                    duration: 500
                }
            ]
        },
        {   id: 'dc-segregation-info-3',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: "<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>Much of African American commercial life centered around the Shaw, Columbia Heights, and Atlas District neighborhoods. In 1968, the assassination of Dr. Martin Luther King Jr. in Memphis triggered riots that saw the destruction of much of the businesses that encompassed U Street, 14th Street, 9th Street, and 7th Street. Recovery took decades, especially in the Columbia Heights and the U Street Corridor neighborhoods. Metro stations were installed in both areas in the 1990s, paving the way for gentrification in the following decades.</span>",
            location: {
                center: [-77.12, 38.902],
                zoom: 11.1,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'showLegend1',
            onChapterEnter: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                },

                {
                    layer: 'min-pop',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                },

                {
                    layer: 'min-pop',
                    opacity: 0,
                    duration: 500
                }
            ]
        },
        {   id: 'dc-1968-riots-image',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/1968-riots.jpg',
            description: 'Aftermath of the 1968 Washington, DC riots.<cite><p style=line-height:4px;>Source: Library of Congress</cite></p>',
            location: {
                center: [-77.12, 38.902],
                zoom: 11.1,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'showLegend1',
            onChapterEnter: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                },

                {
                    layer: 'min-pop',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                },

                {
                    layer: 'min-pop',
                    opacity: 0,
                    duration: 500
                }
            ]
        },
        {   id: 'dc-gentrification-image',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/u-street-now.png',
            description: 'Murals and new restaurants line the U Street Corridor.<cite><p style=line-height:4px;>Credit: Mike Maguire</cite></p>',
            location: {
                center: [-77.12, 38.902],
                zoom: 11.1,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                }
            ]
        },
        {   id: 'dc-gentrification-title',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=line-height:70px;margin-top:25px;display:block;text-align:center;font-family:Palatino,serif;font-size:80px;margin-top:25px;>GENTRIFICATION</span>',
            location: {
                center: [-77.12, 38.902],
                zoom: 11.1,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                }
            ]
        },
        {   id: 'dc-gentrification-info',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: "<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>A powerful force that engulfs many US cities, including DC, is <strong style='color:#ba9ad6'>gentrification</strong>. Prior to the COVID-19 pandemic, DC had experienced an influx of more affluent transients into neighborhoods that had primarily been low-to-moderate income areas. According to NCRC's <a href='https://ncrc.org/gentrification/'>Shifting Neighborhoods</a> report, DC was the most gentrified city between 2000 and 2013. It had dropped to 13th place during the 2013-2017 period, but the disparate impacts of the economic and cultural shifts are still felt today. </span><p><cite>For more information on gentrification in DC and other American cities during the 2013-2017 period, check out NCRC's <a href='https://ncrc.org/gentrification20/'>Gentrification & Disinvestment</a> report.</p></cite>",
            location: {
                center: [-77.12, 38.902],
                zoom: 11.1,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'dc-boundary',
                    opacity: 1,
                    duration: 1000
                },

                {
                    layer: 'dc-gentrification',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                },

                {
                    layer: 'dc-gentrification',
                    opacity: 0,
                    duration: 500
                }
            ]
        },
        {   id: 'dc-displacement-image',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/dc-displacement.jpg',
            description: 'New "luxury" apartment buildings being built near older recently-occupied buildings near the intersection of V Street & Vermont Avenue.<cite><p style=line-height:4px;>Credit: Ted Eytan</cite></p>',
            location: {
                center: [-77.12, 38.902],
                zoom: 11.1,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                } 
            ]
        },
        {   id: 'dc-displacement-title',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=line-height:70px;margin-top:25px;display:block;text-align:center;font-family:Palatino,serif;font-size:80px;margin-top:25px;>BLACK DISPLACEMENT</span><span style=line-height:40px;margin-top:25px;display:block;text-align:center;font-family:Palatino,serif;font-size:50px;margin-top:25px;>(1970 - 2019)</span>',
            location: {
                center: [-77.12, 38.902],
                zoom: 11.1,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'dc-boundary',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                }
            ]
        },
        {   id: 'dc-displacement-info',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: "<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>As gentrification led to many communities undergoing economic and soial changes across the United States, it was accompanied by extreme and unnecessary cultural displacement. Although gentrification raised values of properties in areas that were suffering from generations of disinvestment, it had resulted in rising rents and costs of living, leading to many low-income residents being priced out of their homes. Barry Farm, an historic community built for low-income families in Southeast DC, was one such example that was demolished in 2019 to make way for a new development, leading to the displacement of many of its predominantly Black inhabitants.</span><p><cite>For more information on gentrification in Washington, DC, check out <a href='https://ncrc.org/gentrification-dc/'>Washington D.G.: The District Of Gentrification</a>. For more information on displacement in American cities, check out NCRC's <a href='https://ncrc.org/gentrification/'>Shifting Neighborhoods</a> report.</p></cite>",
            location: {
                center: [-77.12, 38.902],
                zoom: 10.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'showLegend2',
            onChapterEnter: [
                {
                    layer: 'dc-boundary',
                    opacity: 1,
                    duration: 1000
                },

                {
                    layer: 'road-secondary-tertiary',
                    opacity: 0,
                    duration: 1000
                },

                {
                    layer: 'dc-black-perc',
                    opacity: .8,
                    duration: 1000
                },
                {
                    layer: 'u-street-corridor',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'dc-boundary',
                    opacity: 0,
                    duration: 500
                },

                {
                    layer: 'road-secondary-tertiary',
                    opacity: 1,
                    duration: 1000
                },

                {
                    layer: 'dc-black-perc',
                    opacity: 0,
                    duration: 500
                },
                {
                    layer: 'u-street-corridor',
                    opacity: 0
                }
            ]
        },
        {   id: 'dc-displacement-to-u-street-area',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-77.12, 38.902],
                zoom: 10.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showLegend2',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'u-street-corridor-photo',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/u-street-pano.jpg',
            description: 'Street-view of the U Street Corridor facing towards Georgia Avenue.<cite><p style=line-height:4px;>Credit: Ted Eytan</cite></p>',
            location: {
                center: [-77.12, 38.902],
                zoom: 10.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {   id: 'u-street-corridor-title',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=line-height:60px;margin-top:25px;display:block;text-align:center;font-family:Palatino,serif;font-size:80px;margin-top:25px;>U STREET CORRIDOR</span>',
            location: {
                center: [-77.12, 38.902],
                zoom: 10.7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'u-street-corridor',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'u-street-corridor',
                    opacity: 0
                }
            ]
        },
        {   id: 'u-street-corridor-info',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>This historic area, parts of which are euphemistically referred to as Black Broadway, includes U Street, Georgia Avenue, 7th and 9th Streets, and Florida Avenue, among other intersecting streets. Adding to the area’s reputation, luminaries like civil rights icon Charles Hamilton Houston, composer Duke Ellington, and blood bank pioneer Dr. Charles Drew, as well as basketball legends Elgin Baylor and Dave Bing all worked, trained or lived in this historic area.</span>',
            location: {
                center: [-77.019, 38.918],
                zoom: 14.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'u-street-corridor',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'u-street-corridor',
                    opacity: 1
                }
            ]
        },
        {   id: 'duke-ellington-photo',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/duke-ellington.jpg',
            description: 'Still of Duke Ellington leading his orchestra in New York City (1944).<cite><p style=line-height:4px;>Source: Library of Congress</cite></p>',
            location: {
                center: [-77.019, 38.918],
                zoom: 14.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'u-street-corridor',
                    opacity: 1
                },
                {
                    layer: 'u-street-main',
                    opacity: 0
                },
            ],
            onChapterExit: [
                {
                    layer: 'u-street-corridor',
                    opacity: 1
                }
            ]
        },
        {   id: 'u-street-main',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>Much of the corridor serves as a local economic hub filled with restaurants, cafes, and nightlife. Many of these businesses exist on U Street and Florida Avenue, stretching from Rhode Island Avenue NW to 17th Street NW.</span>',
            location: {
                center: [-77.019, 38.918],
                zoom: 14.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'dc-boundary',
                    opacity: 0
                },

                {
                    layer: 'u-street-corridor',
                    opacity: 1
                },

                {
                    layer: 'u-street-main',
                    opacity: 1
                },

                {
                    layer: 'howard-university',
                    opacity: 0
                },

                {
                    layer: 'cultural-businesses',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'dc-boundary',
                    opacity: 0
                },

                {
                    layer: 'u-street-corridor',
                    opacity: 1
                },

                {
                    layer: 'u-street-main',
                    opacity: 1
                },

                {
                    layer: 'howard-university',
                    opacity: 0
                },

                {
                    layer: 'cultural-businesses',
                    opacity: 0
                }
            ]
        },
        {   id: 'howard-university-info',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>The importance of this corridor also stems from an association with vital African American institutions such as <strong>Howard University</strong>. The areas within Shaw and around Howard University have connections to Black experiences that also stretch back to the 19th century. A marked presence of African Americans in the area was noted as early as the Civil War and Howard University itself was founded in 1867.</span>',
            location: {
                center: [-77.019, 38.918],
                zoom: 14.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'dc-boundary',
                    opacity: 0
                },

                {
                    layer: 'u-street-corridor',
                    opacity: 1
                },

                {
                    layer: 'u-street-main',
                    opacity: 1
                },

                {
                    layer: 'howard-university',
                    opacity: 1
                },

                {
                    layer: 'cultural-businesses',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'dc-boundary',
                    opacity: 0
                },

                {
                    layer: 'u-street-corridor',
                    opacity: 1
                },

                {
                    layer: 'u-street-main',
                    opacity: 1
                },

                {
                    layer: 'howard-university',
                    opacity: 1
                },

                {
                    layer: 'cultural-businesses',
                    opacity: 0
                }
            ]
        },
        {   id: 'howard-university-image',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/howard-u.png',
            description: "A view of Howard University's Founders Library from the Yard, dedicated in 1939 and designed by architect Albert I. Cassell.<cite><p style=line-height:4px;>Source: Office of University Communications, Howard University</cite></p>",
            location: {
                center: [-77.019, 38.918],
                zoom: 14.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'dc-boundary',
                    opacity: 0
                },

                {
                    layer: 'u-street-corridor',
                    opacity: 1
                },

                {
                    layer: 'u-street-main',
                    opacity: 1
                },

                {
                    layer: 'howard-university',
                    opacity: 1
                },

                {
                    layer: 'cultural-businesses',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'dc-boundary',
                    opacity: 0
                },

                {
                    layer: 'u-street-corridor',
                    opacity: 1
                },

                {
                    layer: 'u-street-main',
                    opacity: 1
                },

                {
                    layer: 'howard-university',
                    opacity: 1
                },

                {
                    layer: 'cultural-businesses',
                    opacity: 0
                }
            ]
        },
        {   id: 'culturally-significant-businesses',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=line-height:50px;margin-top:25px;display:block;text-align:center;font-family:Palatino,serif;font-size:50px;margin-top:25px;>CULTURALLY SIGNIFICANT BUSINESSES</span><span style=line-height:40px;margin-top:25px;display:block;text-align:center;font-family:Palatino,serif;font-size:30px;margin-top:25px;><cite>businesses that are focused on their role in the neighborhood as a center of community, the specific services or products which are offered to African Americans, and the affinity of the business for Black patrons - creating a welcoming and comfortable space.</span></cite>',
            location: {
                center: [-77.019, 38.918],
                zoom: 14.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'dc-boundary',
                    opacity: 0
                },

                {
                    layer: 'u-street-corridor',
                    opacity: 1
                },

                {
                    layer: 'u-street-main',
                    opacity: 1
                },

                {
                    layer: 'howard-university',
                    opacity: 1
                },

                {
                    layer: 'cultural-businesses',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'dc-boundary',
                    opacity: 0
                },

                {
                    layer: 'u-street-corridor',
                    opacity: 0
                },

                {
                    layer: 'u-street-main',
                    opacity: 0
                },

                {
                    layer: 'howard-university',
                    opacity: 0
                },

                {
                    layer: 'cultural-businesses',
                    opacity: 0
                }
            ]
        },
        {   id: 'zawadi-title',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=line-height:50px;margin-top:25px;display:block;text-align:center;font-family:Palatino,serif;font-size:40px;margin-top:25px;>ZAWADI</span>',
            location: {
                center: [-77.03563, 38.91687],
                zoom: 21.32,
                pitch: 60.00,
                bearing: -140.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'zawadi-info',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>In 1991, after a 10-year sojourn across Africa, Irene T. Whalen returned to Washington, DC and opened Zawadi on U Street. The Maryland native channeled her travel experience and studies into ownership of clothing, art, books, jewelry, and housewares boutique that specializes in goods made primarily by African, and other Black, artisans. The location of her store was perfect, she described, “because of the historical background” of the area. One transition pertained to her only staff person who left the area to return to her home state of Ohio. The employee continues to work for Whalen, and even took a deferment in her salary. Operating hours also changed after her employee returned home. The staff person worked Wednesday and Thursday and Whalen would come in on Friday and Saturday. Now the store is only open on the weekends.</span>',
            location: {
                center: [-77.03563, 38.91687],
                zoom: 21.32,
                pitch: 60.00,
                bearing: -140.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'zawadi-quote',
            alignment: 'left',
            hidden: false,
            title: '"I think it is very important [to our culture], and I think people recognize it for that. As I said, I have developed a loyal customer base... somewhere they know they can go and find the art, the craft, the culture, of the diaspora, and Black Americans here. So it is a place of comfort and also a place where they can find the gifts that they are seeking. They tell me often that they appreciate my efforts to maintain my space."',
            image: '',
            description: '<p>- Irene Whalen, <cite>Zawadi</cite></p>',
            location: {
                center: [-77.03563, 38.91687],
                zoom: 21.32,
                pitch: 60.00,
                bearing: -140.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'zawadi-photo-1',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/zawadi-2.jpg',
            description: '',
            location: {
                center: [-77.03563, 38.91687],
                zoom: 21.32,
                pitch: 60.00,
                bearing: -140.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'zawadi-photo-2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/zawadi-1.jpg',
            description: '',
            location: {
                center: [-77.03563, 38.91687],
                zoom: 21.32,
                pitch: 60.00,
                bearing: -140.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'black-white-optical-title',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=line-height:50px;margin-top:25px;display:block;text-align:center;font-family:Palatino,serif;font-size:40px;margin-top:25px;>BLACK & WHITE LOOK OPTICAL</span>',
            location: {
                center: [-77.03533, 38.91686],
                zoom: 21.32,
                pitch: 60.00,
                bearing: -140.80
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'black-white-optical-info',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>Jessica Frye-McClain is a second-generation optometrist and Detroit native who started her business in 2019. McClain had to let one employee go as a result of the pandemic and currently only has a full-time assistant and part-time ophthalmologist on staff. Masks are mandated and there were bottles of hand sanitizer on two desks in the very small operating space of the shop.  Patrons also have the option of making purchases online. There is also a 10% discount for the first online sale if clients join the “Black and White Look Optical Family.”</span>',
            location: {
                center: [-77.03533, 38.91686],
                zoom: 21.32,
                pitch: 60.00,
                bearing: -140.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'black-white-optical-photo-1',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/bw-optical-1.jpg',
            description: '',
            location: {
                center: [-77.03533, 38.91686],
                zoom: 21.32,
                pitch: 60.00,
                bearing: -140.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'black-white-optical-photo-2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/bw-optical-2.jpg',
            description: '',
            location: {
                center: [-77.03533, 38.91686],
                zoom: 21.32,
                pitch: 60.00,
                bearing: -140.80
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'black-white-optical-quote',
            alignment: 'left',
            hidden: false,
            title: '"...I come from a family of opticians though, so I thought it was normal for Black people to be in this industry...In optician school, there was only three Black people in my graduating class...the two other Black people in the class were like, "I am not graduating." It made me just so sad, because I did not even know that they were not doing well. It just woke me up to be more, like I got to do it, I got to stay consistent with it."',
            image: '',
            description: '<p>- Jessica McClain, <cite>Black & White Look Optical</cite></p>',
            location: {
                center: [-77.03533, 38.91686],
                zoom: 21.32,
                pitch: 60.00,
                bearing: -140.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'new-image-title',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=line-height:50px;margin-top:25px;display:block;text-align:center;font-family:Palatino,serif;font-size:40px;margin-top:25px;>A NEW IMAGE BY ACIA</span>',
            location: {
                center: [-77.02231, 38.91656],
                zoom: 19.5,
                pitch: 60.00,
                bearing: -11.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'new-image-info',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>Dr. Acia Williams has been in the cosmetology business for over 20 years. She opened her hair salon in 2017. A New Image Salon provides both hair styling and scalp health maintenance for African American women. Williams’ salon also offered very targeted help with hair loss through her Hair Loss Rejuvenation Clinic. It is these specific kinds of services, as well as the opportunity for patrons to gather in a relatively homogeneous space, that connect this business to culture via the shared needs and practices of the larger Black populace.</span>',
            location: {
                center: [-77.02231, 38.91656],
                zoom: 19.5,
                pitch: 60.00,
                bearing: -11.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'new-image-photo-1',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/new-image-photo-1.jpg',
            description: '',
            location: {
                center: [-77.02231, 38.91656],
                zoom: 19.5,
                pitch: 60.00,
                bearing: -11.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'new-image-quote',
            alignment: 'right',
            hidden: false,
            title: '"My business is very important...Cosmetology is downgraded when they want to say, "Hairdressers." Hairdressers, we are downgraded. They act as if they do not need it...So, I had these other services to it that will make someone still feel just as good and could walk out with instant results but still be natural. Still be natural...So, that is what I do here."',
            image: '',
            description: '<p>- Dr. Acia Williams, <cite>A New Image by Acia</cite></p>',
            location: {
                center: [-77.02231, 38.91656],
                zoom: 19.5,
                pitch: 60.00,
                bearing: -11.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'new-image-photo-2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/new-image-photo-2.jpg',
            description: '',
            location: {
                center: [-77.02231, 38.91656],
                zoom: 19.5,
                pitch: 60.00,
                bearing: -11.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'sankofa-books-title',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=line-height:50px;margin-top:25px;display:block;text-align:center;font-family:Palatino,serif;font-size:40px;margin-top:25px;>SANKOFA VIDEO, BOOKS & CAFE</span>',
            location: {
                center: [-77.02300, 38.92564],
                zoom: 20.60,
                pitch: 60.00,
                bearing: -63.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'sankofa-books-info',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>Sankofa Video, Books & Cafe is located north of U Street and adjacent to Howard University (HU). It is owned by HU graduate Shirikiana Gerima and her husband, Haile Gerima, both of whom taught at the HBCU at one time; Shirikiana is also a graduate of the school. The owners specialize in the retail distribution of books and videos related to the interdisciplinary study of the diverse Black experience. Books for adults and young readers are available from Black authors across the globe in fiction and non-fiction genres. In addition to selling Afrocentric cards and jewelry, Shirikiana and Haile also use their space for community events - allowing scholars, artists, activists and others give presentations or screen films.</span>',
            location: {
                center: [-77.02300, 38.92564],
                zoom: 20.60,
                pitch: 60.00,
                bearing: -63.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'sankofa-books-photo-1',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/sankofa-1.jpg',
            description: '',
            location: {
                center: [-77.02300, 38.92564],
                zoom: 20.60,
                pitch: 60.00,
                bearing: -63.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'sankofa-books-quote',
            alignment: 'left',
            hidden: false,
            title: '"The talent that comes through Sankofa is amazing, so that we use it as a place for people to express themselves...These are things all around literature and looking at the past in order to plan a future. All those things are marinating at Sankofa and coming to a nice flavor, we hope, as we cultivate a new generation of people who are steeped in what has been offered to them already in their past, and it was continuing to be offered to them in a present. When they go do something of the future, they are armed, in the best sense of the word."',
            image: '',
            description: '<p>- Shirikiana Gerima, <cite>Sankofa Books & Video</cite></p>',
            location: {
                center: [-77.02300, 38.92564],
                zoom: 20.60,
                pitch: 60.00,
                bearing: -63.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'sankofa-books-photo-2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/sankofa-2.jpg',
            description: '',
            location: {
                center: [-77.02300, 38.92564],
                zoom: 20.60,
                pitch: 60.00,
                bearing: -63.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'lees-flowers-title',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: "<span style=line-height:50px;margin-top:25px;display:block;text-align:center;font-family:Palatino,serif;font-size:40px;margin-top:25px;>LEE'S FLOWER & CARD SHOP</span>",
            location: {
                center: [-77.02673, 38.91689],
                zoom: 20,
                pitch: 60.00,
                bearing: -156.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'lees-flowers-info',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>Lee’s is one of the oldest African American owned businesses in the Shaw/Greater U Street area. The business was founded by Massachusetts-native, Richard Lee, who was the grandfather of its current owners, Stacie Lee Banks and Kristie Lee-Jones. Lee’s family business is inextricably linked to the social and cultural history of this community and Banks was keenly aware of this connection. She described her parent’s decision to purchase the building their shop is located in as “one of their best decisions in terms of a legacy.” She also believes their business would not have survived the COVID-19 pandemic or gentrification had her parents not seen the importance of owning the entire building outright so many decades ago.</span>',
            location: {
                center: [-77.02673, 38.91689],
                zoom: 20,
                pitch: 60.00,
                bearing: -156.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'lees-flowers-photo-1',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/lees-1.jpg',
            description: '',
            location: {
                center: [-77.02673, 38.91689],
                zoom: 20,
                pitch: 60.00,
                bearing: -156.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'lees-flowers-quote',
            alignment: 'left',
            hidden: false,
            title: '"I think it is vital to have a business like ours...I feel like we ground the neighborhood...and let the neighborhood know that this was a vital part of our history for the city."',
            image: '',
            description: "<p>- Stacie Banks, <cite>Lee's Flower & Card Shop</cite></p>",
            location: {
                center: [-77.02673, 38.91689],
                zoom: 20,
                pitch: 60.00,
                bearing: -156.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'lees-flowers-photo-2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/lees-2.jpg',
            description: '',
            location: {
                center: [-77.02673, 38.91689],
                zoom: 20,
                pitch: 60.00,
                bearing: -156.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'dc-end',
            alignment: 'center',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-77.02527, 38.89306],
                zoom: 11.43,
                pitch: 2,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                }
            ]
        }
    ]
};
