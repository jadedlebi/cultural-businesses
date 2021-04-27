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
    footer: "<p style=font-size:20px;line-height:10px>Produced in collaboration with Dr. Sabiyha Prince.</p><p style=font-size:15px;line-height:8px>Photos provided by <cite>Zawadi</cite>, <cite>Black & White Look Optical</cite>, <cite>A New Image by Acia</cite>, <cite>Sankofa Video, Books & Cafe</cite>, and <cite>Lee's Flower & Card Shop</cite> used with permission.</p>",
    chapters: [
        {   id: 'place-name',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:center;font-family:Helvetica,serif;font-size:50px;margin-top:25px;line-height:75px;>WASHINGTON, D.C.</span>',
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
            description: '<span style=display:block;text-align:left;font-family:Helvetica,serif;font-size:40px;margin-top:25px;font-style:bold;line-height:60px;>The pandemic has created many challenges for businesses in D.C. Here are some of their stories.</span>',
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
            image: './images/ncrc-2.png',
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
            description: 'The Republic Theatre on U Street, circa 1945-46. <cite><p style=line-height:4px;>Photo by Robert H. McNeill, courtesy of Susan McNeill</cite></p>',
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
            description: '<span style=line-height:70px;margin-top:25px;display:block;text-align:center;font-family:Palatino,serif;font-size:80px;margin-top:25px;>D.C. & SEGREGATION</span>',
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
            description: "<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>D.C. has had a large Black population since the 1870s. Black residents were between a quarter and a third of the city’s population right up until 1960, after which D.C. became a majority-Black city. The Jim Crow era brought many hardships to Black communities across the country. Racially restrictive covenants, redlining and social pressure from White people that often erupted into violence forced African Americans to leave neighborhoods that were more racially mixed. These actions led to the establishment of large, segregated Black communities that were served by thriving Black businesses yet still vulnerable to the aggression of neighboring residents. What’s been dubbed “The Red Summer” of 1919 engulfed many Black communities across the country, including the U Street area of Washington D.C.  Perhaps the most notorious attack took place later, in 1921, in the Greenwood District of Tulsa, Oklahoma, now better known to the general public as “Black Wall Street.”</span>",
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
            description: "<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>Beginning in the 1930s, D.C. had experienced an increase of job growth within the U.S. Government, attracting many families and individuals from everywhere in the country. This led many African American men, women and children to migrate to the city during the Great Migration era. Although many escaped hardships in the American South, segregation was still deeply rooted in D.C.'s structures. Many of the Black neighborhoods were in the eastern and southern portions of the city.</span>",
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
            description: "<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>Much of African American commercial life centered around the Anacostia, Shaw, Columbia Heights and Atlas District neighborhoods. In 1968, the assassination of Dr. Martin Luther King Jr. in Memphis triggered uprisings that saw the destruction of much of the businesses that encompassed U Street, 14th Street, 9th Street and 7th Street. Recovery took decades, especially in the Columbia Heights and the U Street Corridor neighborhoods. Metro stations were installed in both areas in the 1990s, paving the way for gentrification in the following decades.</span>",
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
        {   id: 'dc-1968-uprisings-image',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/1968-uprisings.jpg',
            description: 'Aftermath of the 1968 Washington, D.C. uprisings.<cite><p style=line-height:4px;>Photo obtained from the <a href="https://www.loc.gov/pictures/item/2003688168/">Library of Congress</a></cite></p>',
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
            description: 'Murals and new restaurants line the U Street Corridor.<cite><p style=line-height:4px;>Photo by Mike Maguire via <a href="https://www.flickr.com/photos/mikespeaks/49155765983">Flickr</a></cite></p>',
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
            description: "<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;><strong style='color:#ba9ad6'>Gentrification</strong> is a powerful force that engulfs many U.S. cities, including D.C. Prior to the COVID-19 pandemic, D.C. had experienced an influx of more affluent transients into neighborhoods that had primarily been low- and moderate-income areas. According to NCRC's <a href='https://ncrc.org/gentrification/'>Shifting Neighborhoods</a> report, D.C. was the most gentrified city between 2000 and 2013. It dropped to 13th place during the 2013-2017 period, but the disparate impacts of the economic and cultural shifts are still felt today.</span><p><cite>For more information on gentrification in D.C. and other American cities during the 2013-2017 period, check out NCRC's <a href='https://ncrc.org/gentrification20/'>Gentrification & Disinvestment</a> report.</p></cite>",
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
            description: 'New "luxury" apartment buildings being built next to older recently-occupied buildings near the intersection of V Street & Vermont Avenue.<cite><p style=line-height:4px;>Photo by Ted Eytan via <a href="https://www.flickr.com/photos/taedc/26378915276/">Flickr</a></cite></p>',
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
            description: "<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>As gentrification led to many communities undergoing economic and social changes across the United States, it was accompanied by extreme and unnecessary cultural displacement. Although gentrification raised values of properties in areas that were suffering from decades of disinvestment, it had resulted in rising rents and costs of living, leading to many low-income residents being priced out of their homes. Barry Farm, an historic community built for low-income families in Southeast D.C., was one such example that was demolished in 2019 to make way for a new development, leading to the displacement of many of its predominantly Black residents.</span><p><cite>For more information on gentrification in Washington, DC, check out <a href='https://ncrc.org/gentrification-dc/'>Washington D.G.: The District Of Gentrification</a>. For more information on displacement in American cities, check out NCRC's <a href='https://ncrc.org/gentrification/'>Shifting Neighborhoods</a> report.</p></cite>",
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
            description: 'Street-view of the U Street Corridor facing towards Georgia Avenue.<cite><p style=line-height:4px;>Photo by Ted Eytan via <a href="https://www.flickr.com/photos/22526649@N03/50258343683/">Flickr</a></cite></p>',
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
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>This historic area, parts of which are referred to as "Black Broadway," includes U Street, Georgia Avenue, 7th and 9th Streets, and Florida Avenue, among other intersecting streets. Adding to the area’s reputation, luminaries like civil rights icon Charles Hamilton Houston, composer Duke Ellington, and blood bank pioneer Dr. Charles Drew, as well as basketball legends Elgin Baylor and Dave Bing all worked, trained or lived in this historic area.</span>',
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
            description: 'Still of Duke Ellington leading his orchestra in New York City (1944).<cite><p style=line-height:4px;>Photo obtained from the <a href="https://www.loc.gov/pictures/item/2017851482/">Library of Congress</a></cite></p>',
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
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>Much of the corridor serves as a local economic hub filled with restaurants, cafes and nightlife. Many of these businesses exist on <strong style=color:#73b2d9>U Street and Florida Avenue</strong>, stretching from Rhode Island Avenue NW to 17th Street NW.</span>',
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
                    opacity: .7
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
                    opacity: .7
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
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>The importance of this corridor also stems from an association with vital African American institutions such as <strong style=color:#b98164>Howard University</strong>. The areas within Shaw and around <strong style=color:#b98164>Howard University</strong> have connections to Black experiences that also stretch back to the 19th century. A marked presence of African Americans in the area was noted as early as the Civil War and <strong style=color:#b98164>Howard University</strong> itself was founded in 1867.</span>',
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
                    opacity: .7
                },

                {
                    layer: 'howard-university',
                    opacity: .7
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
                    opacity: .7
                },

                {
                    layer: 'howard-university',
                    opacity: .7
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
            image: './images/howard-u.jpg',
            description: "A view of Howard University's Founders Library from the Yard, dedicated in 1939 and designed by architect Albert I. Cassell.<cite><p style=line-height:4px;>Photo by Derek E. Morton via <a href='https://commons.wikimedia.org/wiki/File:Howard_University_Washington_DC_-_Founders_Library.jpg'>Wikimedia Commons</a></cite></p>",
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
                    opacity: .7
                },

                {
                    layer: 'howard-university',
                    opacity: .7
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
                    opacity: .7
                },

                {
                    layer: 'howard-university',
                    opacity: .7
                },

                {
                    layer: 'cultural-businesses',
                    opacity: 0
                }
            ]
        },
        {   id: 'culturally-significant-businesses-title',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=line-height:50px;margin-top:25px;display:block;text-align:center;font-family:Palatino,serif;font-size:50px;margin-top:25px;>CULTURALLY SIGNIFICANT BUSINESSES</span>',
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
                    opacity: .7
                },

                {
                    layer: 'howard-university',
                    opacity: .7
                },

                {
                    layer: 'cultural-businesses',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                },

                {
                    layer: 'u-street-corridor',
                    opacity: 1
                },

                {
                    layer: 'u-street-main',
                    opacity: .7
                },

                {
                    layer: 'howard-university',
                    opacity: .7
                },

                {
                    layer: 'cultural-businesses',
                    opacity: 1
                }
            ]
        },
        {   id: 'culturally-significant-businesses-info-1',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=line-height:40px;margin-top:25px;display:block;text-align:center;font-family:Palatino,serif;font-size:30px;margin-top:25px;><cite><strong style=color:#E3CE52>Culturally significant businesses</strong> are essential to their communities. Their continued presence can offer critical support for well-being by providing access to safe and welcoming spaces for the area residents. These businesses are also crucial to the availability of important, strategic or highly valued goods, services, and jobs near residents.</span></cite>',
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
                    opacity: .7
                },

                {
                    layer: 'howard-university',
                    opacity: .7
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
                    opacity: 1
                },

                {
                    layer: 'u-street-main',
                    opacity: .7
                },

                {
                    layer: 'howard-university',
                    opacity: .7
                },

                {
                    layer: 'cultural-businesses',
                    opacity: 1
                }
            ]
        },
        {   id: 'culturally-significant-businesses-info-2',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=line-height:40px;margin-top:25px;display:block;text-align:center;font-family:Palatino,serif;font-size:30px;margin-top:25px;><cite><strong style=color:#E3CE52>Cultural significance</strong> is determined by a number of overlapping factors including the length of time a business has been present in a community, the importance of the location where the businesses are found, how the particular goods and services offered by the business resonate with customers and community members and the relationships established between entrepreneurs and patrons that result in meaningful and sustained interactions.</span></cite>',
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
                    opacity: .7
                },

                {
                    layer: 'howard-university',
                    opacity: .7
                },

                {
                    layer: 'cultural-businesses',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                },

                {
                    layer: 'u-street-corridor',
                    opacity: 1
                },

                {
                    layer: 'u-street-main',
                    opacity: .7
                },

                {
                    layer: 'howard-university',
                    opacity: .7
                },

                {
                    layer: 'cultural-businesses',
                    opacity: 1
                }
            ]
        },
        {   id: 'culturally-significant-businesses-info-3',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=line-height:40px;margin-top:25px;display:block;text-align:center;font-family:Palatino,serif;font-size:30px;margin-top:25px;><cite>Broader historical, political and economic contexts are important determinants of cultural significance - the persistence of inequality and unfairness for businesses and the communities makes Black-owned businesses vital symbols of resistance and perseverance.</span></cite>',
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
                    opacity: .7
                },

                {
                    layer: 'howard-university',
                    opacity: .7
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
                    opacity: 1
                },

                {
                    layer: 'u-street-main',
                    opacity: .7
                },

                {
                    layer: 'howard-university',
                    opacity: .7
                },

                {
                    layer: 'cultural-businesses',
                    opacity: 1
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
                center: [-77.03556, 38.91679],
                zoom: 18.92,
                pitch: 54.00,
                bearing: 158.40
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
                },

                {
                    layer: 'business-buildings',
                    opacity: 1
                },

                {
                    layer: 'bw-optical',
                    opacity: 0
                },

                {
                    layer: 'not-bw-optical',
                    opacity: .8
                }
            ],
            onChapterExit: [
                {
                    layer: 'business-buildings',
                    opacity: 1
                },

                {
                    layer: 'bw-optical',
                    opacity: 0
                },

                {
                    layer: 'not-bw-optical',
                    opacity: .8
                }
            ]
        },
        {   id: 'zawadi-info-1',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>In 1991, after a 10-year sojourn across Africa, Irene T. Whalen returned to Washington, D.C., and opened Zawadi on U Street. The Maryland native channeled her travel experience and studies into ownership of a clothing, art, books, jewelry and housewares boutique that specializes in goods made primarily by African, and other Black, artisans.</span>',
            location: {
                center: [-77.03556, 38.91679],
                zoom: 18.92,
                pitch: 54.00,
                bearing: 158.40
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
                center: [-77.03556, 38.91679],
                zoom: 18.92,
                pitch: 54.00,
                bearing: 158.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'zawadi-info-2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>The location of her store was perfect, she described, “because of the historical background” of the area. One transition pertained to her only staff person who left the area to return to her home state of Ohio. The employee continues to work for Whalen, and even took a deferment in her salary. Operating hours also changed after her employee returned home. The staff person worked Wednesday and Thursday and Whalen would come in on Friday and Saturday. Now the store is only open on the weekends.</span>',
            location: {
                center: [-77.03556, 38.91679],
                zoom: 18.92,
                pitch: 54.00,
                bearing: 158.40
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
            title: '',
            image: '',
            description: '<q style=font-family:Palatino Linotype,serif; font-size:80px;><strong>I think it is very important [to our culture], and I think people recognize it for that. As I said, I have developed a loyal customer base... somewhere they know they can go and find the art, the craft, the culture, of the diaspora, and Black Americans here. So it is a place of comfort and also a place where they can find the gifts that they are seeking. They tell me often that they appreciate my efforts to maintain my space.</q></strong><p>- Irene Whalen, <cite>Zawadi</cite></p>',
            location: {
                center: [-77.03556, 38.91679],
                zoom: 18.92,
                pitch: 54.00,
                bearing: 158.40
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
                center: [-77.03556, 38.91679],
                zoom: 18.92,
                pitch: 54.00,
                bearing: 158.40
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'business-buildings',
                    opacity: 1
                },

                {
                    layer: 'bw-optical',
                    opacity: 0
                },

                {
                    layer: 'not-bw-optical',
                    opacity: .8
                },

                {
                    layer: 'not-zawadi',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'business-buildings',
                    opacity: 1
                },

                {
                    layer: 'bw-optical',
                    opacity: 0
                },

                {
                    layer: 'not-bw-optical',
                    opacity: .8
                },

                {
                    layer: 'not-zawadi',
                    opacity: 0
                }
            ]
        },
        {   id: 'black-white-optical-title',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=line-height:50px;margin-top:25px;display:block;text-align:center;font-family:Palatino,serif;font-size:40px;margin-top:25px;>BLACK & WHITE LOOK OPTICAL</span>',
            location: {
                center: [-77.03524, 38.91681],
                zoom: 18.92,
                pitch: 54.00,
                bearing: 158.40
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'business-buildings',
                    opacity: 0
                },

                {
                    layer: 'bw-optical',
                    opacity: 1
                },

                {
                    layer: 'not-bw-optical',
                    opacity: 0
                },

                {
                    layer: 'not-zawadi',
                    opacity: .8
                }
            ],
            onChapterExit: [
                {
                    layer: 'business-buildings',
                    opacity: 0
                },

                {
                    layer: 'bw-optical',
                    opacity: 1
                },

                {
                    layer: 'not-bw-optical',
                    opacity: 0
                },

                {
                    layer: 'not-zawadi',
                    opacity: .8
                }
            ]
        },
        {   id: 'black-white-optical-info',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>Jessica Frye-McClain is a second-generation optometrist and Detroit native who started her business in 2019. McClain had to let one employee go as a result of the pandemic and currently only has a full-time assistant and part-time ophthalmologist on staff. Masks are mandated and there were bottles of hand sanitizer on two desks in the very small operating space of the shop. Patrons also have the option of making purchases online. There is also a 10% discount for the first online sale if clients join the “Black and White Look Optical Family.”</span>',
            location: {
                center: [-77.03524, 38.91681],
                zoom: 18.92,
                pitch: 54.00,
                bearing: 158.40
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
                center: [-77.03524, 38.91681],
                zoom: 18.92,
                pitch: 54.00,
                bearing: 158.40
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
                center: [-77.03524, 38.91681],
                zoom: 18.92,
                pitch: 54.00,
                bearing: 158.40
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
            title: '',
            image: '',
            description: '<q><strong>...I come from a family of opticians though, so I thought it was normal for Black people to be in this industry...In optician school, there was only three Black people in my graduating class...the two other Black people in the class were like, "I am not graduating." It made me just so sad, because I did not even know that they were not doing well. It just woke me up to be more, like I got to do it, I got to stay consistent with it.</q></strong><p>- Jessica McClain, <cite>Black & White Look Optical</cite></p>',
            location: {
                center: [-77.03524, 38.91681],
                zoom: 18.92,
                pitch: 54.00,
                bearing: 158.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'business-buildings',
                    opacity: 0
                },

                {
                    layer: 'bw-optical',
                    opacity: 1
                },

                {
                    layer: 'not-zawadi',
                    opacity: .8
                }
            ],
            onChapterExit: [
                {
                    layer: 'business-buildings',
                    opacity: 0
                },

                {
                    layer: 'bw-optical',
                    opacity: 1
                },

                {
                    layer: 'not-zawadi',
                    opacity: .8
                }
            ]
        },
        {   id: 'new-image-title',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=line-height:50px;margin-top:25px;display:block;text-align:center;font-family:Palatino,serif;font-size:40px;margin-top:25px;>A NEW IMAGE BY ACIA</span>',
            location: {
                center: [-77.02227, 38.91662],
                zoom: 18.92,
                pitch: 58.50,
                bearing: -29.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'business-buildings',
                    opacity: 1
                },

                {
                    layer: 'bw-optical',
                    opacity: 0
                },

                {
                    layer: 'not-zawadi',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'business-buildings',
                    opacity: 1
                },

                {
                    layer: 'bw-optical',
                    opacity: 0
                },

                {
                    layer: 'not-zawadi',
                    opacity: 0
                }
            ]
        },
        {   id: 'new-image-info-1',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>Dr. Acia Williams has been in the cosmetology business for over 20 years. She opened her hair salon in 2017. A New Image Salon provides both hair styling and scalp health maintenance for African American women.</span>',
            location: {
                center: [-77.02227, 38.91662],
                zoom: 18.92,
                pitch: 58.50,
                bearing: -29.60
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
                center: [-77.02227, 38.91662],
                zoom: 18.92,
                pitch: 58.50,
                bearing: -29.60
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
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<q><strong>My business is very important...Cosmetology is downgraded when they want to say, ‘Hairdressers.’ Hairdressers, we are downgraded. They act as if they do not need it...So, I had these other services to it that will make someone still feel just as good and could walk out with instant results but still be natural. Still be natural...So, that is what I do here.</q></strong><p>- Dr. Acia Williams, <cite>A New Image by Acia</cite></p>',
            location: {
                center: [-77.02227, 38.91662],
                zoom: 18.92,
                pitch: 58.50,
                bearing: -29.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'new-image-info-2',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>Williams’ salon also offered very targeted help with hair loss through her Hair Loss Rejuvenation Clinic. It is these specific kinds of services, as well as the opportunity for patrons to gather in a relatively homogeneous space, that connects this business to culture via the shared needs and practices of the larger Black populace.</span>',
            location: {
                center: [-77.02227, 38.91662],
                zoom: 18.92,
                pitch: 58.50,
                bearing: -29.60
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
                center: [-77.02227, 38.91662],
                zoom: 18.92,
                pitch: 58.50,
                bearing: -29.60
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
                center: [-77.02313, 38.92558],
                zoom: 19.04,
                pitch: 56.00,
                bearing: -66.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'sankofa-books-info-1',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>Sankofa Video, Books & Cafe is located north of U Street and adjacent to Howard University (HU). It is owned by HU graduate Shirikiana Gerima and her husband, Haile Gerima, both of whom taught at the HBCU at one time. The owners specialize in the retail distribution of books and videos related to the interdisciplinary study of the diverse Black experience.</span>',
            location: {
                center: [-77.02313, 38.92558],
                zoom: 19.04,
                pitch: 56.00,
                bearing: -66.40
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
                center: [-77.02313, 38.92558],
                zoom: 19.04,
                pitch: 56.00,
                bearing: -66.40
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
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<q><strong>The talent that comes through Sankofa is amazing, so that we use it as a place for people to express themselves...These are things all around literature and looking at the past in order to plan a future. All those things are marinating at Sankofa and coming to a nice flavor, we hope, as we cultivate a new generation of people who are steeped in what has been offered to them already in their past, and it was continuing to be offered to them in the present. When they go do something of the future, they are armed, in the best sense of the word.</q></strong><p>- Shirikiana Gerima, <cite>Sankofa Books & Video</cite></p>',
            location: {
                center: [-77.02313, 38.92558],
                zoom: 19.04,
                pitch: 56.00,
                bearing: -66.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'sankofa-books-info-2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>Books for adults and young readers are available from Black authors across the globe in fiction and non-fiction genres. In addition to selling Afrocentric cards and jewelry, Shirikiana and Haile also use their space for community events - allowing scholars, artists, activists and others give presentations or screen films.</span>',
            location: {
                center: [-77.02313, 38.92558],
                zoom: 19.04,
                pitch: 56.00,
                bearing: -66.40
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
                center: [-77.02313, 38.92558],
                zoom: 19.04,
                pitch: 56.00,
                bearing: -66.40
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
                center: [-77.02669, 38.91685],
                zoom: 18.71,
                pitch: 43.00,
                bearing: 148.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'lees-flowers-info-1',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>Lee’s is one of the oldest African American owned businesses in the Shaw/Greater U Street area. The business was founded by Massachusetts-native, Richard Lee, who was the grandfather of its current owners, Stacie Lee Banks and Kristie Lee-Jones. Lee’s family business is inextricably linked to the social and cultural history of this community and Banks was keenly aware of this connection.</span>',
            location: {
                center: [-77.02669, 38.91685],
                zoom: 18.71,
                pitch: 43.00,
                bearing: 148.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'lees-flowers-info-2',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>Banks described her parent’s decision to purchase the building their shop is located in as “one of their best decisions in terms of a legacy.” She also believes their business would not have survived the COVID-19 pandemic or gentrification had her parents not seen the importance of owning the entire building outright so many decades ago.</span>',
            location: {
                center: [-77.02669, 38.91685],
                zoom: 18.71,
                pitch: 43.00,
                bearing: 148.00
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
                center: [-77.02669, 38.91685],
                zoom: 18.71,
                pitch: 43.00,
                bearing: 148.00
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
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: "<q><strong>I think it is vital to have a business like ours...I feel like we ground the neighborhood...and let the neighborhood know that this was a vital part of our history for the city.</q></strong><p>- Stacie Banks, <cite>Lee's Flower & Card Shop</cite></p>",
            location: {
                center: [-77.02669, 38.91685],
                zoom: 18.71,
                pitch: 43.00,
                bearing: 148.00
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
                center: [-77.02669, 38.91685],
                zoom: 18.71,
                pitch: 43.00,
                bearing: 148.00
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
