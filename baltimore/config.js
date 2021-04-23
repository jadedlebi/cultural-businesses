var config = {
    style: 'mapbox://styles/jedlebi/ckmuoecfo0m5317mlokvumdfp',
    accessToken: 'pk.eyJ1IjoiamVkbGViaSIsImEiOiJjanhhc3M4NnYwMmxsM3lyODlxYTFhOGRxIn0.746AmyW45uwRPeUy1PczOg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false,
    title: 'Culturally Significant Businesses',
    subtitle: '',
    byline: '',
    footer: '<p style=font-size:20px;line-height:10px>Produced in collaboration with Dr. Sabiyha Prince.</p><p style=font-size:15px;line-height:8px>Photos provided by <cite>The Avenue Bakery</cite>, <cite>Capital Lounge</cite>, <cite>City Weeds & BeMore Green</cite>, and <cite>Redd Funeral Services</cite> used with permission.</p>',
    chapters: [
        {   id: 'place-name',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:center;font-family:Helvetica,serif;font-size:50px;margin-top:25px;line-height:75px;>BALTIMORE, MD</span>',
            location: {
                center: [-76.62, 39.29],
                zoom: 11.8,
                pitch: 2,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                }
            ]
        },
        {   id: 'baltimore-subtitle',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Helvetica,serif;font-size:40px;margin-top:25px;font-style:bold;line-height:60px;>Businesses in Baltimore are working to reclaim the legacy of their communities. Here are some of their stories.</span>',
            location: {
                center: [-76.62, 39.29],
                zoom: 11.8,
                pitch: 2,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'baltimore-boundary',
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
                center: [-76.62, 39.29],
                zoom: 11.8,
                pitch: 2,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                }
            ]
        },
        {   id: 'baltimore-redlining-image',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/baltimore-redlining-title.jpg',
            description: 'Foster Avenue and the old cork factory in Baltimore (1965). <cite><p style=line-height:4px;>Photo by George Lane on Flickr</cite></p>',
            location: {
                center: [-76.62, 39.29],
                zoom: 11.8,
                pitch: 2,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                }
            ]
        },
        {   id: 'baltimore-redlining-title',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=line-height:70px;margin-top:25px;display:block;text-align:center;font-family:Palatino,serif;font-size:80px;margin-top:25px;>BALTIMORE & THE LEGACY OF REDLINING</span>',
            location: {
                center: [-76.62, 39.29],
                zoom: 11.8,
                pitch: 2,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                },

                {
                    layer: 'baltimore-boundary-2',
                    opacity: 0
                },
                
                {
                    layer: 'holc-jpg',
                    opacity: 0
                },

                {
                    layer: 'holc-grades',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                }
            ]
        },
        {   id: 'baltimore-redlining-info-1',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: "<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>Baltimore has an extensive industrial history as a major port city. It also has a complex history of racial segregation. In 1911, it was the first city in the nation to enact a local ordinance which separated the city into White and Black neighborhood blocks. Restrictive covenants enforced by neighborhood associations and exclusionary deeds were used to prohibit sales of property to African American and Jewish families. Residential “redlining” is another part of this history of exclusion and racial segregation.</span>",
            location: {
                center: [-76.76, 39.29401],
                zoom: 11,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'showLegend3',
            onChapterEnter: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                },

                {
                    layer: 'baltimore-boundary-2',
                    opacity: 1,
                    duration: 1000
                },

                {
                    layer: 'holc-jpg',
                    opacity: .8,
                    duration: 1000
                },

                {
                    layer: 'holc-grades',
                    opacity: 0,
                    duration: 1000
                },

                {
                    layer: 'holc-red',
                    opacity: 0,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                },

                {
                    layer: 'baltimore-boundary-2',
                    opacity: 1
                },
                
                {
                    layer: 'holc-jpg',
                    opacity: .8
                }
            ]
        },
        {   id: 'baltimore-redlining-info-2',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: "<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>As part of the New Deal, the federal government created the Home Owners’ Loan Corporation (HOLC). While the HOLC was responsible for many innovations as it worked to stabilize the mortgage market, it also sent evaluators to cities across the country to determine their risks for home mortgage loans. Based on their observations, the quality of a neighborhood was assessed and graded from 'A' through 'D.’ The highest grade of 'A' was indicated by green shading on maps, and qualified as 'Best', while  'D' graded areas, or <strong style='color:#c43131'>redlined</strong> areas, were shaded in red and qualified as 'Hazardous.' These red-coded neighborhoods were then systematically denied access to credit and insurance, while the A- and B-graded areas had good access to mortgage loans. This had a considerable impact during the post-war period, as the FHA and VA became major backers of mortgages in expanding suburban neighborhoods.</span>",
            location: {
                center: [-76.76, 39.29401],
                zoom: 11,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'showLegend3',
            onChapterEnter: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                },

                {
                    layer: 'baltimore-boundary-2',
                    opacity: 1
                },

                {
                    layer: 'holc-jpg',
                    opacity: .8
                }
            ],
            onChapterExit: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                },

                {
                    layer: 'baltimore-boundary-2',
                    opacity: 1
                },
                
                {
                    layer: 'holc-jpg',
                    opacity: .8
                }
            ]
        },
        {   id: 'baltimore-redlining-info-3',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: "<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>The HOLC’s evaluations were intended to protect the value of government investments but fair access to housing and credit were never a consideration. Given the segregationist policies of the era, their practices targeted many communities of color as automatic high-risk areas, with remarks containing terms we view today as racist and xenophobic.</span>",
            location: {
                center: [-76.76, 39.29401],
                zoom: 11,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'showLegend3',
            onChapterEnter: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                },

                {
                    layer: 'baltimore-boundary-2',
                    opacity: 1,
                    duration: 1000
                },

                {
                    layer: 'holc-jpg',
                    opacity: .8,
                    duration: 1000
                },

                {
                    layer: 'holc-grades',
                    opacity: 0,
                    duration: 1000
                },

                {
                    layer: 'holc-red',
                    opacity: 0,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                },

                {
                    layer: 'baltimore-boundary-2',
                    opacity: 1
                },
                
                {
                    layer: 'holc-jpg',
                    opacity: .8
                }
            ]
        },
        {   id: 'holc-d4-image',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/holc-d4.jpg',
            description: "HOLC Examiner's notes of the redlined area that received a 'D' grade in West Baltimore (1937). <cite><p style=line-height:4px;>Photo from University of Richmond's <a href='https://dsl.richmond.edu/panorama/redlining/#loc=12/39.301/-76.709&city=baltimore-md&area=D4&adimage=3/63.899/-146.426'>Mapping Inequality</a> project.</cite></p>",
            location: {
                center: [-76.76, 39.29401],
                zoom: 11,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'showLegend3',
            onChapterEnter: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                },

                {
                    layer: 'baltimore-boundary-2',
                    opacity: 1
                },

                {
                    layer: 'holc-jpg',
                    opacity: .5,
                    duration: 1000
                },

                {
                    layer: 'holc-grades',
                    opacity: 1,
                    duration: 1000
                },

                {
                    layer: 'holc-red',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                },

                {
                    layer: 'baltimore-boundary-2',
                    opacity: 1
                },
                
                {
                    layer: 'holc-jpg',
                    opacity: .5
                },

                {
                    layer: 'holc-grades',
                    opacity: 1
                },

                {
                    layer: 'holc-red',
                    opacity: 1
                }
            ]
        },
        {   id: 'baltimore-redlining-info-4',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: "<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>Most of the redlined areas existed in downtown Baltimore, Pennsylvania Avenue through Druid Heights, East Baltimore and the Inner Harbor. These neighborhoods had a mixture of African American, Italian, and immigrant residents. Since the creation of the HOLC map of Baltimore, these and adjacent “C” graded areas were specifically targeted in predatory practices such as blockbusting, resource reallocation and disinvestment.</span>",
            location: {
                center: [-76.76, 39.29401],
                zoom: 11,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                },

                {
                    layer: 'baltimore-boundary-2',
                    opacity: 0
                },
                
                {
                    layer: 'holc-jpg',
                    opacity: 0,
                    duration: 1000
                },

                {
                    layer: 'holc-grades',
                    opacity: 1
                },

                {
                    layer: 'holc-red',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                },

                {
                    layer: 'holc-red',
                    opacity: 1
                },

                {
                    layer: 'holc-grades',
                    opacity: 1
                },

                {
                    layer: 'holc-jpg',
                    opacity: 0
                }
            ]
        },
        {   id: 'baltimore-redlining-info-5',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: "<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>The consistent barriers created by these practices led to these neighborhoods being excluded from economic development. This concentrated a range of disadvantages and made the neighborhoods prone to economic downturns as the city lost many of its large industrial employers through the 1970’s. A core area around the Inner Harbor was extensively redeveloped in the 1970’s and 80’s. The economic activity generated by this did not extend far into west Baltimore.</span>",
            location: {
                center: [-76.76, 39.29401],
                zoom: 11,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                },

                {
                    layer: 'holc-grades',
                    opacity: 1
                },

                {
                    layer: 'holc-red',
                    opacity: 1
                },

                {
                    layer: 'baltimore-svi',
                    opacity: 0,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                },

                {
                    layer: 'holc-red',
                    opacity: 1
                },

                {
                    layer: 'holc-grades',
                    opacity: 1
                }
            ]
        },
        {   id: 'svi-info',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: "<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>This is reflected in the high social vulnerability of the area today. Social vulnerability, a measure of a neighborhood’s susceptibility to disasters like the Great Recession or the COVID-19 pandemic, is  higher than it is in affluent and predominantly White neighborhoods of the city. The higher the social vulnerability, the more likely it is for a neighborhood to be impacted and have difficulty recovering from a disaster. In some cases, these contrasting neighborhoods are within walking distance from one another, illustrating the extent to which segregation shaped the city.</span><p><cite>For more information on redlining and its impacts on social vulnerability in Baltimore and other American cities, check out NCRC's <a href='https://ncrc.org/holc-health/'>Redlining & Neighborhood Health</a> report.</p></cite>",
            location: {
                center: [-76.76, 39.29401],
                zoom: 11,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'showLegend2',
            onChapterEnter: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                },

                {
                    layer: 'baltimore-svi',
                    opacity: 1,
                    duration: 1000
                },

                {
                    layer: 'baltimore-lifeexp',
                    opacity: 0,
                    duration: 1000
                },

                {
                    layer: 'holc-red',
                    opacity: 0,
                    duration: 1000
                },

                {
                    layer: 'holc-grades',
                    opacity: 0,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                },

                {
                    layer: 'baltimore-svi',
                    opacity: 1
                }
            ]
        },
        {   id: 'life-exp-info',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: "<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>The systemic differences in vulnerability disparately impacted communities of color, where poverty rates increased and housing conditions declined with the onset of lead contamination and neglect by landlords. These conditions persisted long enough to decrease the average life expectancy of an individual living in the affected neighborhoods while more affluent neighborhoods retained higher life expectancy.</span><p><cite>For more information on redlining and its public health impacts in Baltimore and other American cities, check out NCRC's <a href='https://ncrc.org/holc-health/'>Redlining & Neighborhood Health</a> report.</p></cite>",
            location: {
                center: [-76.76, 39.29401],
                zoom: 11,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'showLegend5',
            onChapterEnter: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                },
                
                {
                    layer: 'baltimore-svi',
                    opacity: 0,
                    duration: 1000
                },

                {
                    layer: 'baltimore-lifeexp',
                    opacity: 1,
                    duration: 1000
                },
            ],
            onChapterExit: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                },

                {
                    layer: 'baltimore-lifeexp',
                    opacity: 1
                }
            ]
        },
        {   id: 'hide-legend',
            alignment: 'right',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-76.76, 39.29401],
                zoom: 11,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                },
                
                {
                    layer: 'baltimore-svi',
                    opacity: 0,
                    duration: 1000
                },

                {
                    layer: 'baltimore-lifeexp',
                    opacity: 0
                },
            ],
            onChapterExit: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                }
            ]
        },
        {   id: 'penn-ave-corridor-photo',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/penn-1700.jpg',
            description: 'Businesses along the 1700 block of Pennsylvania Avenue in Baltimore.<cite><p style=line-height:4px;>Photo by Eli Pousson of Baltimore Heritage</cite></p>',
            location: {
                center: [-76.62, 39.29],
                zoom: 11.8,
                pitch: 2,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {   id: 'penn-ave-corridor-title',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=line-height:80px;margin-top:25px;display:block;text-align:center;font-family:Palatino,serif;font-size:80px;margin-top:25px;>PENNSYLVANIA AVENUE</span>',
            location: {
                center: [-76.62, 39.29],
                zoom: 11.8,
                pitch: 2,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'penn-ave-area',
                    opacity: 0
                },

                {
                    layer: 'penn-ave-labels',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'penn-ave-area',
                    opacity: 0
                },

                {
                    layer: 'penn-ave-labels',
                    opacity: 0
                }
            ]
        },
        {   id: 'penn-ave-corridor-info-1',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>What has come to be known as “Old West” Baltimore consists of 175 blocks that have been linked to formerly enslaved African Americans since the late 19th century as a home to both the Black working class and those with elite status. This is a community associated with such notable Baltimoreans as performing artists Cab Calloway, Billie Holiday and Chick Webb, as well as the Mitchell family political dynasty, and the first African American supreme court justice, Thurgood Marshall.</span>',
            location: {
                center: [-76.625, 39.30776],
                zoom: 13.62,
                pitch: 0.50,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'penn-ave-area',
                    opacity: 1,
                    duration: 1000
                },

                {
                    layer: 'penn-ave-labels',
                    opacity: 0
                },

                {
                    layer: 'penn-ave-main',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'penn-ave-area',
                    opacity: 1
                },

                {
                    layer: 'penn-ave-labels',
                    opacity: 0
                },

                {
                    layer: 'penn-ave-main',
                    opacity: 0
                }
            ]
        },
        {   id: 'penn-ave-corridor-info-2',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>The neighborhoods of west Baltimore include Druid Heights, Harlem Park, Madison Park, Marble Hill, Sandtown Upton, and others, some of which are connected via <strong style=color:#73b2d9;>Pennsylvania Avenue</strong>, the historic economic and cultural hub of that vicinity. In the midst of all the restrictive practices, communities were created where Black identity was held as a staple to establish new businesses. With new businesses popping up, residents effectively built a local culture around <strong style=color:#73b2d9;>Pennsylvania Avenue</strong>.</span>',
            location: {
                center: [-76.625, 39.30776],
                zoom: 13.62,
                pitch: 0.50,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'penn-ave-area',
                    opacity: 1
                },

                {
                    layer: 'penn-ave-labels',
                    opacity: 1,
                    duration: 1000
                },

                {
                    layer: 'penn-ave-main',
                    opacity: .8,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'penn-ave-area',
                    opacity: 1
                },

                {
                    layer: 'penn-ave-labels',
                    opacity: 1
                },

                {
                    layer: 'penn-ave-main',
                    opacity: .8
                }
            ]
        },
        {   id: 'penn-ave-corridor-info-3',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>Many Black-owned businesses dotted the area - African American insurance companies, doctor’s offices and many others including the Associated Colored Orchestras located at 1503 Pennsylvania Avenue during the 1940s. The <strong>Royal Theater</strong>, formerly known as the Douglass Theater which opened in 1922, was an important institution associated with the vibrant history of this community. It was demolished in 1971 but the dream of reopening it is one held by many local residents.</span>',
            location: {
                center: [-76.625, 39.30776],
                zoom: 13.62,
                pitch: 0.50,
                bearing: 0.00
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'penn-ave-area',
                    opacity: 1
                },

                {
                    layer: 'penn-ave-labels',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'penn-ave-area',
                    opacity: 1
                },

                {
                    layer: 'penn-ave-labels',
                    opacity: 1
                }
            ]
        },
        {   id: 'royal-old-photo',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/royal-old.jpg',
            description: '',
            location: {
                center: [-76.625, 39.30776],
                zoom: 13.62,
                pitch: 0.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'penn-ave-area',
                    opacity: 1
                },

                {
                    layer: 'penn-ave-labels',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'penn-ave-area',
                    opacity: 1
                },

                {
                    layer: 'penn-ave-labels',
                    opacity: 1
                }
            ]
        },
        {   id: 'royal-old-photo-info',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Royal Theater, Baltimore (1939).<cite><p style=line-height:4px;>Photo courtesy of Theatre Talks on Tumblr</cite></p>',
            location: {
                center: [-76.625, 39.30776],
                zoom: 13.62,
                pitch: 0.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'penn-ave-area',
                    opacity: 1
                },

                {
                    layer: 'penn-ave-labels',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'penn-ave-area',
                    opacity: 1
                },

                {
                    layer: 'penn-ave-labels',
                    opacity: 1
                }
            ]
        },
        {   id: 'royal-now-photo',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/royal-now.jpg',
            description: '',
            location: {
                center: [-76.625, 39.30776],
                zoom: 13.62,
                pitch: 0.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'penn-ave-area',
                    opacity: 1
                },

                {
                    layer: 'penn-ave-labels',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'penn-ave-area',
                    opacity: 1
                },

                {
                    layer: 'penn-ave-labels',
                    opacity: 1
                }
            ]
        },
        {   id: 'royal-now-photo-info',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Royal Theater Marquee Plaza, 1329 Pennsylvania Avenue, Baltimore.<cite><p style=line-height:4px;>Photo by Eli Pousson of Baltimore Heritage</cite></p>',
            location: {
                center: [-76.625, 39.30776],
                zoom: 13.62,
                pitch: 0.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'penn-ave-area',
                    opacity: 1
                },

                {
                    layer: 'penn-ave-labels',
                    opacity: 1
                },

                {
                    layer: 'cultural-businesses',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'penn-ave-area',
                    opacity: 1
                },

                {
                    layer: 'penn-ave-labels',
                    opacity: 1
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
                center: [-76.625, 39.30776],
                zoom: 13.62,
                pitch: 0.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'penn-ave-area',
                    opacity: 1
                },

                {
                    layer: 'penn-ave-labels',
                    opacity: 1
                },

                {
                    layer: 'cultural-businesses',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'penn-ave-area',
                    opacity: 1
                },

                {
                    layer: 'penn-ave-labels',
                    opacity: 1
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
                center: [-76.625, 39.30776],
                zoom: 13.62,
                pitch: 0.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'penn-ave-area',
                    opacity: 1
                },

                {
                    layer: 'penn-ave-labels',
                    opacity: 1
                },

                {
                    layer: 'cultural-businesses',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'penn-ave-area',
                    opacity: 1
                },

                {
                    layer: 'penn-ave-labels',
                    opacity: 1
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
                center: [-76.625, 39.30776],
                zoom: 13.62,
                pitch: 0.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'penn-ave-area',
                    opacity: 1
                },

                {
                    layer: 'penn-ave-labels',
                    opacity: 1
                },

                {
                    layer: 'cultural-businesses',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'penn-ave-area',
                    opacity: 1
                },

                {
                    layer: 'penn-ave-labels',
                    opacity: 1
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
                center: [-76.625, 39.30776],
                zoom: 13.62,
                pitch: 0.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'penn-ave-area',
                    opacity: 1
                },

                {
                    layer: 'penn-ave-labels',
                    opacity: 1
                },

                {
                    layer: 'cultural-businesses',
                    opacity: 1
                },

                {
                    layer: 'business-buildings',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'penn-ave-area',
                    opacity: 1
                },

                {
                    layer: 'penn-ave-labels',
                    opacity: 1
                },

                {
                    layer: 'cultural-businesses',
                    opacity: 1
                },

                {
                    layer: 'business-buildings',
                    opacity: 0
                }
            ]
        },
        {   id: 'avenue-bakery-title',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=line-height:50px;margin-top:25px;display:block;text-align:center;font-family:Palatino,serif;font-size:40px;margin-top:25px;>THE AVENUE BAKERY</span>',
            location: {
                center: [-76.63983, 39.30824],
                zoom: 18.07,
                pitch: 47.50,
                bearing: 1.38
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'penn-ave-area',
                    opacity: 0
                },

                {
                    layer: 'penn-ave-labels',
                    opacity: 0
                },

                {
                    layer: 'cultural-businesses',
                    opacity: 0
                },

                {
                    layer: 'penn-ave-main',
                    opacity: .2
                },

                {
                    layer: 'business-buildings',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'penn-ave-area',
                    opacity: 0
                },

                {
                    layer: 'penn-ave-labels',
                    opacity: 0
                },

                {
                    layer: 'cultural-businesses',
                    opacity: 0
                },

                {
                    layer: 'penn-ave-main',
                    opacity: .2
                },

                {
                    layer: 'business-buildings',
                    opacity: 1
                }
            ]
        },
        {   id: 'avenue-bakery-info',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>James Hamlin opened The Avenue Bakery in 2011. Owned by a Baltimore native, it is known by customers as “The Home of Poppays rolls.” The bakery is located in a densely populated business district on Pennsylvania Avenue. The building is surrounded by metal fencing and sits approximately 15 feet off of the street. This is a set up that facilitates social distancing.</span>',
            location: {
                center: [-76.63983, 39.30824],
                zoom: 18.07,
                pitch: 47.50,
                bearing: 1.38
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'avenue-bakery-quote',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: "<q><strong>The community respects the business, the property that the business is located in ... it was an old dilapidated building... I renovated the property in 2011. It's become defined as a mini museum, and a whole lot of other positives. And one of the things that we... besides depicting the history and legacy of the community of the artwork and murals and photo montages, we host a concert series every year… and the focus is rebuilding the Royal one brick at a time. Because the Royal Theatre was built by African Americans, and they built it... it was called the Douglass Theatre originally, and they built it by selling bricks.</q></strong><p>- James Hamlin, <cite>The Avenue Bakery</cite></p>",
            location: {
                center: [-76.63983, 39.30824],
                zoom: 18.07,
                pitch: 47.50,
                bearing: 1.38
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'avenue-bakery-photo-1',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/j-hamlin.png',
            description: '',
            location: {
                center: [-76.63983, 39.30824],
                zoom: 18.07,
                pitch: 47.50,
                bearing: 1.38
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'avenue-bakery-photo-2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/avenue-2.jpg',
            description: '',
            location: {
                center: [-76.63983, 39.30824],
                zoom: 18.07,
                pitch: 47.50,
                bearing: 1.38
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'avenue-bakery-photo-3',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/avenue-3.jpg',
            description: '',
            location: {
                center: [-76.63983, 39.30824],
                zoom: 18.07,
                pitch: 47.50,
                bearing: 1.38
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'capital-lounge-title',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=line-height:50px;margin-top:25px;display:block;text-align:center;font-family:Palatino,serif;font-size:40px;margin-top:25px;>CAPITAL LOUNGE</span>',
            location: {
                center: [-76.63318, 39.30262],
                zoom: 18.03,
                pitch: 54.00,
                bearing: 87.20
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'capital-lounge-photo-1',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/capital-1.jpg',
            description: '',
            location: {
                center: [-76.63318, 39.30262],
                zoom: 18.03,
                pitch: 54.00,
                bearing: 87.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'capital-lounge-info',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>Kenneth Brown purchased the property for his Capital Lounge in 2007. The Baltimore native grew up across the street from his current business, a property that has had a number of different identities over the years. The bar and restaurant sells “soul food” made from fresh ingredients. Brown and his partner Katie Fickerling now work with DoorDash, Uber Eats and GrubHub in response to the pandemic.</span>',
            location: {
                center: [-76.63318, 39.30262],
                zoom: 18.03,
                pitch: 54.00,
                bearing: 87.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'capital-lounge-photo-2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/capital-2.jpg',
            description: '',
            location: {
                center: [-76.63318, 39.30262],
                zoom: 18.03,
                pitch: 54.00,
                bearing: 87.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'capital-lounge-quote',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: "<q><strong>And it is really, really important to us that if we can't do anything but inspire the community to see a Black man in business and be successful and give back and support and do as many things as they possibly can.</q></strong><p>- Katie Fickerling, <cite>Capital Lounge</cite></p>",
            location: {
                center: [-76.63318, 39.30262],
                zoom: 18.03,
                pitch: 54.00,
                bearing: 87.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'capital-lounge-photo-3',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/capital-3.jpg',
            description: '',
            location: {
                center: [-76.63318, 39.30262],
                zoom: 18.03,
                pitch: 54.00,
                bearing: 87.20
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'capital-lounge-photo-4',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/capital-4.jpg',
            description: '',
            location: {
                center: [-76.63318, 39.30262],
                zoom: 18.03,
                pitch: 54.00,
                bearing: 87.20
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'cityweeds-bemoregreen-title',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=line-height:50px;margin-top:25px;display:block;text-align:center;font-family:Palatino,serif;font-size:40px;margin-top:25px;>CITY WEEDS & BeMore Green</span>',
            location: {
                center: [-76.63845, 39.31376],
                zoom: 17.56,
                pitch: 57.00,
                bearing: -172.82
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'cityweeds-bemoregreen-info',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>Agricultural leader Dominic Nell is a native of the Sandtown, west Baltimore, neighborhood and a prolific entrepreneur. His list of current projects is long but Nell’s primary focus is on his holistic health and wellness service/food and beverage company, City Weeds, as well as the youth empowerment and educational programming wing of his business called BeMore Green. Nell also teaches at a Baltimore high school and is the creative force behind Microgreens and Farmer Nell, two additional health and wellness projects he has started.</span>',
            location: {
                center: [-76.63845, 39.31376],
                zoom: 17.56,
                pitch: 57.00,
                bearing: -172.82
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'cityweeds-bemoregreen-photo-1',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/cityweeds-1.png',
            description: '',
            location: {
                center: [-76.63845, 39.31376],
                zoom: 17.56,
                pitch: 57.00,
                bearing: -172.82
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'cityweeds-bemoregreen-quote',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: "<q style=font-family:Palatino Linotype,serif; font-size:80px;><strong>What drew me to the area was simply because there was a need and it was visible to me, and I saw that it was a lot behind what was going on in the neighborhood, beyond the police brutality and drug addiction and things of that nature. I realized we're being classified as a food desert or, back then, food swamp. Now, they use the term healthy food priority zone. They're not addressing health and wellness from the inside... programs in Baltimore aren't addressing the whole child. That's my view of it. They're not addressing health and wellness from the inside. They want all the best outside stuff, meaning technology and resources, things of that nature, but what are we putting in our children's bodies? There was a huge gap and void in that all across the board. It was a non-existent conversation, so Be More Green coming on the picture was the City Weeds mission. However, there was a need that had never gotten addressed. BeMore Green was operating as an afterschool program in various different rec centers and schools throughout Baltimore since 2016 in the form of teaching kids how to grow microgreens, which is indoor farming, outdoor farming from raised beds to testing the soil for lead, and community gardens and some community with development projects that didn't necessarily include gardening but repurposing green spaces. Asking the community what they want, not just coming in and saying hey, I'm Farmer Nell, let me teach you how to grow stuff.</q></strong><p>- Dominic Nell, <cite>City Weeds & BeMore Green</cite></p>",
            location: {
                center: [-76.63845, 39.31376],
                zoom: 17.56,
                pitch: 57.00,
                bearing: -172.82
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'cityweeds-bemoregreen-photo-2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/cityweeds-2.png',
            description: '',
            location: {
                center: [-76.63845, 39.31376],
                zoom: 17.56,
                pitch: 57.00,
                bearing: -172.82
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'redd-title',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: "<span style=line-height:50px;margin-top:25px;display:block;text-align:center;font-family:Palatino,serif;font-size:40px;margin-top:25px;>REDD FUNERAL SERVICES</span>",
            location: {
                center: [-76.62647, 39.30373],
                zoom: 17.72,
                pitch: 60.00,
                bearing: -105.16
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'redd-info-1',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>Redd Funeral Services has operated in three Baltimore neighborhoods since its inception in 1973. Originally located on the east side of town and owned by Samuel T. and Guinevere Redd, who are both deceased, the business is currently owned by their sons, Samuel and Charles Redd. The mortuary services company was located at 1721 N. Monroe Street in Sandtown-Winchester, west Baltimore for the bulk of existence but moved to, neighboring, Bolton Hill in 2016.</span>',
            location: {
                center: [-76.62647, 39.30373],
                zoom: 17.72,
                pitch: 60.00,
                bearing: -105.16
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'redd-photo-1',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/redd-2.jpg',
            description: '',
            location: {
                center: [-76.62647, 39.30373],
                zoom: 17.72,
                pitch: 60.00,
                bearing: -105.16
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'penn-ave-main',
                    opacity: .2
                }
            ],
            onChapterExit: [
                {
                    layer: 'penn-ave-main',
                    opacity: .2
                }
            ]
        },
        {   id: 'redd-info-2',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<span style=display:block;text-align:left;font-family:Palatino,serif;font-size:30px;margin-top:25px;font-style:bold;line-height:60px;>The business was also seeing an increase in graveside funerals with families also choosing cremation as an option. As is much more commonplace now, funeral services were also being held via Zoom and Facebook Live to maintain social distance and enable those who cannot travel to attend the event. Redd described food drives, school supplies and healthcare opportunities as well as working with the police to keep the community safe.</span>',
            location: {
                center: [-76.62647, 39.30373],
                zoom: 17.72,
                pitch: 60.00,
                bearing: -105.16
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'redd-photo-2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/redd-1.jpg',
            description: '',
            location: {
                center: [-76.62647, 39.30373],
                zoom: 17.72,
                pitch: 60.00,
                bearing: -105.16
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'redd-quote',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: "<q><strong>We have families that we've been serving since I was a teenager. Even the church that I worship in… it's in the heart of that Sandtown-Winchester area. And it's so depressing right now, and that's why we do so many things to try to help that community. We support schools, we support the community, we support the churches in that area to try to help the churches give back to the community.</q></strong><p>- Samuel Redd, <cite>Redd Funeral Services</cite></p>",
            location: {
                center: [-76.62647, 39.30373],
                zoom: 17.72,
                pitch: 60.00,
                bearing: -105.16
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               
            ],
            onChapterExit: [
                
            ]
        },
        {   id: 'redd-photo-3',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './images/redd-3.jpg',
            description: '',
            location: {
                center: [-76.62647, 39.30373],
                zoom: 17.72,
                pitch: 60.00,
                bearing: -105.16
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'penn-ave-main',
                    opacity: .2
                }
            ],
            onChapterExit: [
                {
                    layer: 'penn-ave-main',
                    opacity: .2
                }
            ]
        },
        {   id: 'baltimore-end',
            alignment: 'center',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-76.62, 39.29],
                zoom: 11.8,
                pitch: 2,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'hideLegend',
            onChapterEnter: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                },

                {
                    layer: 'penn-ave-main',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'baltimore-boundary',
                    opacity: 1
                },

                {
                    layer: 'penn-ave-main',
                    opacity: 0
                }
            ]
        }
    ]
};
