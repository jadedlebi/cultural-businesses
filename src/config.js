var config = {
    style: 'mapbox://styles/jedlebi/ckl18xqny08ni17tfux9mf7kw',
    accessToken: 'pk.eyJ1IjoiamVkbGViaSIsImEiOiJjanhhc3M4NnYwMmxsM3lyODlxYTFhOGRxIn0.746AmyW45uwRPeUy1PczOg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false,
    title: 'Culturally Significant Businesses in Washington, DC',
    subtitle: 'DC Businesses are struggling due to the pandemic. Here are some of their stories.',
    byline: '',
    footer: 'Produced in collaboration with Dr. Sabiyha Prince.',
    chapters: [
        {   id: 'dc-title-to-segregation',
            alignment: 'left',
            hidden: false,
            title: 'Produced by NCRC Research',
            image: '',
            description: '',
            location: {
                center: [-77.12, 38.902],
                zoom: 11.1,
                pitch: 0,
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
        },
        {   id: 'dc-segregation',
            alignment: 'left',
            hidden: false,
            title: 'DC & Segregation',
            image: './images/test-image-u-street.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-77.12, 38.902],
                zoom: 11.1,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'showLegend1',
            onChapterEnter: [
                {
                    layer: 'dc-boundary',
                    opacity: 1
                },

                {
                    layer: 'min-pop',
                    opacity: .7,
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
        {   id: 'dc-gentrification',
            alignment: 'left',
            hidden: false,
            title: 'Gentrification in the 21st Century',
            image: './images/test-image-u-street.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
        {   id: 'dc-displacement',
            alignment: 'left',
            hidden: false,
            title: 'Black Displacement (1970 - 2019)',
            image: './images/test-image-u-street.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
        {   id: 'u-street-area',
            alignment: 'right',
            hidden: false,
            title: 'U Street Corridor',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
                    layer: 'dc-boundary',
                    opacity: 0
                },

                {
                    layer: 'u-street-corridor',
                    opacity: 1
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
        {   id: 'u-street-main',
            alignment: 'right',
            hidden: false,
            title: 'U Street & Florida Avenue',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
        {   id: 'howard-university',
            alignment: 'right',
            hidden: false,
            title: 'Howard University',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
        {   id: 'all-businesses',
            alignment: 'right',
            hidden: false,
            title: 'Culturally Significant Businesses',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
        {   id: 'zawadi',
            alignment: 'right',
            hidden: false,
            title: 'Zawadi',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
        {   id: 'black-white-optical',
            alignment: 'right',
            hidden: false,
            title: 'Black & White Look Optical',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
        {   id: 'new-image',
            alignment: 'left',
            hidden: false,
            title: 'A New Image Hair Salon',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-77.02231, 38.91656],
                zoom: 20.71,
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
                zoom: 20.71,
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
        {   id: 'sankofa-books',
            alignment: 'right',
            hidden: false,
            title: 'Sankofa Books & Video',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
        {   id: 'lees-flowers',
            alignment: 'right',
            hidden: false,
            title: "Lee's Flower & Card Shop",
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-77.02673, 38.91689],
                zoom: 20.99,
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
                zoom: 20.99,
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
