var options = {
        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        chart: {
            height: 350,
            type: "line",
            zoom: {
                enabled: !1
            }
        },
        colors: ["#008ffb"],
        dataLabels: {
            enabled: !1
        },
        stroke: {
            curve: "straight",
            width: [3]
        },
        title: {
            text: "Product Trends by Month",
            align: "left"
        },
        grid: {
            row: {
                colors: ["#f3f3f3", "transparent"],
                opacity: .5
            }
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
        }
    },
    chart = new ApexCharts(document.querySelector("#apex_line1"), options),
    options = (chart.render(), {
        series: [{
            name: "High - 2013",
            data: [28, 29, 33, 36, 32, 32, 33]
        }, {
            name: "Low - 2013",
            data: [12, 11, 14, 18, 17, 13, 13]
        }],
        chart: {
            height: 350,
            type: "line",
            dropShadow: {
                enabled: !0,
                color: "#45404a2e",
                top: 18,
                left: 7,
                blur: 10,
                opacity: .2
            },
            toolbar: {
                show: !1
            }
        },
        colors: ["#2a77f4", "#a5c2f1"],
        dataLabels: {
            enabled: !0,
            style: {
                colors: ["#fff"]
            },
            background: {
                enabled: !0,
                foreColor: "#fff",
                borderRadius: 2,
                padding: 4,
                opacity: .9,
                borderWidth: 1,
                borderColor: "#fff"
            }
        },
        stroke: {
            curve: "smooth",
            width: [3, 3]
        },
        grid: {
            borderColor: "#45404a2e",
            row: {
                colors: ["#f3f3f3", "transparent"],
                opacity: .5
            },
            strokeDashArray: 4
        },
        markers: {
            size: 2
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            title: {
                text: "Month"
            }
        },
        yaxis: {
            title: {
                text: "Temperature"
            },
            min: 5,
            max: 40
        },
        legend: {
            position: "top",
            horizontalAlign: "right",
            floating: !0,
            offsetY: -25,
            offsetX: -5
        }
    }),
    options = ((chart = new ApexCharts(document.querySelector("#apex_line2"), options)).render(), {
        chart: {
            height: 360,
            type: "area",
            stacked: !0,
            toolbar: {
                show: !1,
                autoSelected: "zoom"
            }
        },
        colors: ["#2a77f4", "#a5c2f1"],
        dataLabels: {
            enabled: !1
        },
        stroke: {
            curve: "smooth",
            width: [3, 3],
            dashArray: [0, 4],
            lineCap: "round"
        },
        grid: {
            borderColor: "#45404a2e",
            padding: {
                left: 0,
                right: 0
            },
            strokeDashArray: 4
        },
        markers: {
            size: 0,
            hover: {
                size: 0
            }
        },
        series: [{
            name: "New Visits",
            data: [0, 60, 20, 90, 45, 110, 55, 130, 44, 110, 75, 120]
        }, {
            name: "Unique Visits",
            data: [0, 45, 10, 75, 35, 94, 40, 115, 30, 105, 65, 110]
        }],
        xaxis: {
            type: "month",
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            axisBorder: {
                show: !0,
                color: "#45404a2e"
            },
            axisTicks: {
                show: !0,
                color: "#45404a2e"
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: .4,
                opacityTo: .3,
                stops: [0, 90, 100]
            }
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm"
            }
        },
        legend: {
            position: "top",
            horizontalAlign: "right"
        }
    }),
    options = ((chart = new ApexCharts(document.querySelector("#apex_area1"), options)).render(), document.addEventListener("DOMContentLoaded", function () {
        function t(e) {
            var t = document.querySelectorAll("button");
            Array.prototype.forEach.call(t, function (e) {
                e.classList.remove("active")
            }), e.target.classList.add("active")
        }
        var e = {
                annotations: {
                    yaxis: [{
                        y: 30,
                        borderColor: "#999",
                        label: {
                            show: !0,
                            text: "Support",
                            style: {
                                color: "#fff",
                                background: "#03d87f"
                            }
                        }
                    }],
                    xaxis: [{
                        x: new Date("14 Nov 2012").getTime(),
                        borderColor: "#999",
                        yAxisIndex: 0,
                        label: {
                            show: !0,
                            text: "Rally",
                            style: {
                                color: "#fff",
                                background: "#ffb822"
                            }
                        }
                    }]
                },
                chart: {
                    type: "area",
                    height: 350
                },
                stroke: {
                    width: [3]
                },
                dataLabels: {
                    enabled: !1
                },
                series: [{
                    data: [
                        [13273596e5, 30.95],
                        [1327446e6, 31.34],
                        [13275324e5, 31.18],
                        [13276188e5, 31.05],
                        [1327878e6, 31],
                        [13279644e5, 30.95],
                        [13280508e5, 31.24],
                        [13281372e5, 31.29],
                        [13282236e5, 31.85],
                        [13284828e5, 31.86],
                        [13285692e5, 32.28],
                        [13286556e5, 32.1],
                        [1328742e6, 32.65],
                        [13288284e5, 32.21],
                        [13290876e5, 32.35],
                        [1329174e6, 32.44],
                        [13292604e5, 32.46],
                        [13293468e5, 32.86],
                        [13294332e5, 32.75],
                        [13297788e5, 32.54],
                        [13298652e5, 32.33],
                        [13299516e5, 32.97],
                        [1330038e6, 33.41],
                        [13302972e5, 33.27],
                        [13303836e5, 33.27],
                        [133047e7, 32.89],
                        [13305564e5, 33.1],
                        [13306428e5, 33.73],
                        [1330902e6, 33.22],
                        [13309884e5, 31.99],
                        [13310748e5, 32.41],
                        [13311612e5, 33.05],
                        [13312476e5, 33.64],
                        [13315068e5, 33.56],
                        [13315932e5, 34.22],
                        [13316796e5, 33.77],
                        [1331766e6, 34.17],
                        [13318524e5, 33.82],
                        [13321116e5, 34.51],
                        [1332198e6, 33.16],
                        [13322844e5, 33.56],
                        [13323708e5, 33.71],
                        [13324572e5, 33.81],
                        [13327128e5, 34.4],
                        [13327992e5, 34.63],
                        [13328856e5, 34.46],
                        [1332972e6, 34.48],
                        [13330584e5, 34.31],
                        [13333176e5, 34.7],
                        [1333404e6, 34.31],
                        [13334904e5, 33.46],
                        [13335768e5, 33.59],
                        [13339224e5, 33.22],
                        [13340088e5, 32.61],
                        [13340952e5, 33.01],
                        [13341816e5, 33.55],
                        [1334268e6, 33.18],
                        [13345272e5, 32.84],
                        [13346136e5, 33.84],
                        [13347e8, 33.39],
                        [13347864e5, 32.91],
                        [13348728e5, 33.06],
                        [1335132e6, 32.62],
                        [13352184e5, 32.4],
                        [13353048e5, 33.13],
                        [13353912e5, 33.26],
                        [13354776e5, 33.58],
                        [13357368e5, 33.55],
                        [13358232e5, 33.77],
                        [13359096e5, 33.76],
                        [1335996e6, 33.32],
                        [13360824e5, 32.61],
                        [13363416e5, 32.52],
                        [1336428e6, 32.67],
                        [13365144e5, 32.52],
                        [13366008e5, 31.92],
                        [13366872e5, 32.2],
                        [13369464e5, 32.23],
                        [13370328e5, 32.33],
                        [13371192e5, 32.36],
                        [13372056e5, 32.01],
                        [1337292e6, 31.31],
                        [13375512e5, 32.01],
                        [13376376e5, 32.01],
                        [1337724e6, 32.18],
                        [13378104e5, 31.54],
                        [13378968e5, 31.6],
                        [13382424e5, 32.05],
                        [13383288e5, 31.29],
                        [13384152e5, 31.05],
                        [13385016e5, 29.82],
                        [13387608e5, 30.31],
                        [13388472e5, 30.7],
                        [13389336e5, 31.69],
                        [133902e7, 31.32],
                        [13391064e5, 31.65],
                        [13393656e5, 31.13],
                        [1339452e6, 31.77],
                        [13395384e5, 31.79],
                        [13396248e5, 31.67],
                        [13397112e5, 32.39],
                        [13399704e5, 32.63],
                        [13400568e5, 32.89],
                        [13401432e5, 31.99],
                        [13402296e5, 31.23],
                        [1340316e6, 31.57],
                        [13405752e5, 30.84],
                        [13406616e5, 31.07],
                        [1340748e6, 31.41],
                        [13408344e5, 31.17],
                        [13409208e5, 32.37],
                        [134118e7, 32.19],
                        [13412664e5, 32.51],
                        [13414392e5, 32.53],
                        [13415256e5, 31.37],
                        [13417848e5, 30.43],
                        [13418712e5, 30.44],
                        [13419576e5, 30.2],
                        [1342044e6, 30.14],
                        [13421304e5, 30.65],
                        [13423896e5, 30.4],
                        [1342476e6, 30.65],
                        [13425624e5, 31.43],
                        [13426488e5, 31.89],
                        [13427352e5, 31.38],
                        [13429944e5, 30.64],
                        [13430808e5, 30.02],
                        [13431672e5, 30.33],
                        [13432536e5, 30.95],
                        [134334e7, 31.89],
                        [13435992e5, 31.01],
                        [13436856e5, 30.88],
                        [1343772e6, 30.69],
                        [13438584e5, 30.58],
                        [13439448e5, 32.02],
                        [1344204e6, 32.14],
                        [13442904e5, 32.37],
                        [13443768e5, 32.51],
                        [13444632e5, 32.65],
                        [13445496e5, 32.64],
                        [13448088e5, 32.27],
                        [13448952e5, 32.1],
                        [13449816e5, 32.91],
                        [1345068e6, 33.65],
                        [13451544e5, 33.8],
                        [13454136e5, 33.92],
                        [13455e8, 33.75],
                        [13455864e5, 33.84],
                        [13456728e5, 33.5],
                        [13457592e5, 32.26],
                        [13460184e5, 32.32],
                        [13461048e5, 32.06],
                        [13461912e5, 31.96],
                        [13462776e5, 31.46],
                        [1346364e6, 31.27],
                        [13467096e5, 31.43],
                        [1346796e6, 32.26],
                        [13468824e5, 32.79],
                        [13469688e5, 32.46],
                        [1347228e6, 32.13],
                        [13473144e5, 32.43],
                        [13474008e5, 32.42],
                        [13474872e5, 32.81],
                        [13475736e5, 33.34],
                        [13478328e5, 33.41],
                        [13479192e5, 32.57],
                        [13480056e5, 33.12],
                        [1348092e6, 34.53],
                        [13481784e5, 33.83],
                        [13484376e5, 33.41],
                        [1348524e6, 32.9],
                        [13486104e5, 32.53],
                        [13486968e5, 32.8],
                        [13487832e5, 32.44],
                        [13490424e5, 32.62],
                        [13491288e5, 32.57],
                        [13492152e5, 32.6],
                        [13493016e5, 32.68],
                        [1349388e6, 32.47],
                        [13496472e5, 32.23],
                        [13497336e5, 31.68],
                        [134982e7, 31.51],
                        [13499064e5, 31.78],
                        [13499928e5, 31.94],
                        [1350252e6, 32.33],
                        [13503384e5, 33.24],
                        [13504248e5, 33.44],
                        [13505112e5, 33.48],
                        [13505976e5, 33.24],
                        [13508568e5, 33.49],
                        [13509432e5, 33.31],
                        [13510296e5, 33.36],
                        [1351116e6, 33.4],
                        [13512024e5, 34.01],
                        [1351638e6, 34.02],
                        [13517244e5, 34.36],
                        [13518108e5, 34.39],
                        [135207e7, 34.24],
                        [13521564e5, 34.39],
                        [13522428e5, 33.47],
                        [13523292e5, 32.98],
                        [13524156e5, 32.9],
                        [13526748e5, 32.7],
                        [13527612e5, 32.54],
                        [13528476e5, 32.23],
                        [1352934e6, 32.64],
                        [13530204e5, 32.65],
                        [13532796e5, 32.92],
                        [1353366e6, 32.64],
                        [13534524e5, 32.84],
                        [13536252e5, 33.4],
                        [13538844e5, 33.3],
                        [13539708e5, 33.18],
                        [13540572e5, 33.88],
                        [13541436e5, 34.09],
                        [135423e7, 34.61],
                        [13544892e5, 34.7],
                        [13545756e5, 35.3],
                        [1354662e6, 35.4],
                        [13547484e5, 35.14],
                        [13548348e5, 35.48],
                        [1355094e6, 35.75],
                        [13551804e5, 35.54],
                        [13552668e5, 35.96],
                        [13553532e5, 35.53],
                        [13554396e5, 37.56],
                        [13556988e5, 37.42],
                        [13557852e5, 37.49],
                        [13558716e5, 38.09],
                        [1355958e6, 37.87],
                        [13560444e5, 37.71],
                        [13563036e5, 37.53],
                        [13564764e5, 37.55],
                        [13565628e5, 37.3],
                        [13566492e5, 36.9],
                        [13569084e5, 37.68],
                        [13570812e5, 38.34],
                        [13571676e5, 37.75],
                        [1357254e6, 38.13],
                        [13575132e5, 37.94],
                        [13575996e5, 38.14],
                        [1357686e6, 38.66],
                        [13577724e5, 38.62],
                        [13578588e5, 38.09],
                        [1358118e6, 38.16],
                        [13582044e5, 38.15],
                        [13582908e5, 37.88],
                        [13583772e5, 37.73],
                        [13584636e5, 37.98],
                        [13588092e5, 37.95],
                        [13588956e5, 38.25],
                        [1358982e6, 38.1],
                        [13590684e5, 38.32],
                        [13593276e5, 38.24],
                        [1359414e6, 38.52],
                        [13595004e5, 37.94],
                        [13595868e5, 37.83],
                        [13596732e5, 38.34],
                        [13599324e5, 38.1],
                        [13600188e5, 38.51],
                        [13601052e5, 38.4],
                        [13601916e5, 38.07],
                        [1360278e6, 39.12],
                        [13605372e5, 38.64],
                        [13606236e5, 38.89],
                        [136071e7, 38.81],
                        [13607964e5, 38.61],
                        [13608828e5, 38.63],
                        [13612284e5, 38.99],
                        [13613148e5, 38.77],
                        [13614012e5, 38.34],
                        [13614876e5, 38.55],
                        [13617468e5, 38.11],
                        [13618332e5, 38.59],
                        [13619196e5, 39.6]
                    ]
                }],
                markers: {
                    size: 0,
                    style: "hollow"
                },
                xaxis: {
                    type: "datetime",
                    min: new Date("01 Mar 2012").getTime(),
                    tickAmount: 6,
                    axisBorder: {
                        show: !0,
                        color: "#bec7e0"
                    },
                    axisTicks: {
                        show: !0,
                        color: "#bec7e0"
                    }
                },
                colors: ["#008ffb"],
                tooltip: {
                    x: {
                        format: "dd MMM yyyy"
                    }
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: .7,
                        opacityTo: .4,
                        stops: [0, 100]
                    }
                }
            },
            a = new ApexCharts(document.querySelector("#apex_area2"), e);
        a.render();
        document.querySelector("#one_month").addEventListener("click", function (e) {
            t(e), a.updateOptions({
                xaxis: {
                    min: new Date("28 Jan 2013").getTime(),
                    max: new Date("27 Feb 2013").getTime()
                }
            })
        }), document.querySelector("#six_months").addEventListener("click", function (e) {
            t(e), a.updateOptions({
                xaxis: {
                    min: new Date("27 Sep 2012").getTime(),
                    max: new Date("27 Feb 2013").getTime()
                }
            })
        }), document.querySelector("#one_year").addEventListener("click", function (e) {
            t(e), a.updateOptions({
                xaxis: {
                    min: new Date("27 Feb 2012").getTime(),
                    max: new Date("27 Feb 2013").getTime()
                }
            })
        }), document.querySelector("#ytd").addEventListener("click", function (e) {
            t(e), a.updateOptions({
                xaxis: {
                    min: new Date("01 Jan 2013").getTime(),
                    max: new Date("27 Feb 2013").getTime()
                }
            })
        }), document.querySelector("#all").addEventListener("click", function (e) {
            t(e), a.updateOptions({
                xaxis: {
                    min: void 0,
                    max: void 0
                }
            })
        }), document.querySelector("#ytd").addEventListener("click", function () {})
    }), {
        chart: {
            height: 396,
            type: "bar",
            toolbar: {
                show: !1
            }
        },
        plotOptions: {
            bar: {
                horizontal: !1,
                endingShape: "rounded",
                columnWidth: "55%"
            }
        },
        dataLabels: {
            enabled: !1
        },
        stroke: {
            show: !0,
            width: 2,
            colors: ["transparent"]
        },
        colors: ["rgba(42, 118, 244, .18)", "#2a76f4", "rgba(251, 182, 36, .6)"],
        series: [{
            name: "Net Profit",
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: "Revenue",
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
            name: "Free Cash Flow",
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
        xaxis: {
            categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
            axisBorder: {
                show: !0,
                color: "#bec7e0"
            },
            axisTicks: {
                show: !0,
                color: "#bec7e0"
            }
        },
        legend: {
            offsetY: 6
        },
        yaxis: {
            title: {
                text: "$ (thousands)"
            }
        },
        fill: {
            opacity: 1
        },
        grid: {
            row: {
                colors: ["transparent", "transparent"],
                opacity: .2
            },
            borderColor: "#f1f3fa"
        },
        tooltip: {
            y: {
                formatter: function (e) {
                    return "$ " + e + " thousands"
                }
            }
        }
    }),
    options = ((chart = new ApexCharts(document.querySelector("#apex_column1"), options)).render(), {
        chart: {
            height: 380,
            type: "bar",
            toolbar: {
                show: !1
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    position: "top"
                }
            }
        },
        dataLabels: {
            enabled: !0,
            formatter: function (e) {
                return e + "%"
            },
            offsetY: -20,
            style: {
                fontSize: "12px",
                colors: ["#304758"]
            }
        },
        colors: ["#2a76f4"],
        series: [{
            name: "Inflation",
            data: [2.3, 3.1, 4, 10.1, 4, 3.6, 3.2, 2.3, 1.4, .8, .5, .2]
        }],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            position: "top",
            labels: {
                offsetY: -18
            },
            axisBorder: {
                show: !0,
                color: "#28365f"
            },
            axisTicks: {
                show: !0,
                color: "#28365f"
            },
            crosshairs: {
                fill: {
                    type: "gradient",
                    gradient: {
                        colorFrom: "#D8E3F0",
                        colorTo: "#BED1E6",
                        stops: [0, 100],
                        opacityFrom: .4,
                        opacityTo: .5
                    }
                }
            },
            tooltip: {
                enabled: !0,
                offsetY: -35
            }
        },
        fill: {
            gradient: {
                enabled: !1,
                shade: "light",
                type: "horizontal",
                shadeIntensity: .25,
                gradientToColors: void 0,
                inverseColors: !0,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [50, 0, 100, 100]
            }
        },
        yaxis: {
            axisBorder: {
                show: !1
            },
            axisTicks: {
                show: !1
            },
            labels: {
                show: !1,
                formatter: function (e) {
                    return e + "%"
                }
            }
        },
        title: {
            text: "Monthly Inflation in Argentina, 2002",
            floating: !0,
            offsetY: 350,
            align: "center",
            style: {
                color: "#8997bd"
            }
        },
        grid: {
            row: {
                colors: ["#afb7d21a", "transparent"],
                opacity: .2
            },
            borderColor: "#f1f3fa"
        }
    }),
    options = ((chart = new ApexCharts(document.querySelector("#apex_column2"), options)).render(), {
        chart: {
            height: 380,
            type: "bar",
            toolbar: {
                show: !1
            }
        },
        plotOptions: {
            bar: {
                horizontal: !0
            }
        },
        dataLabels: {
            enabled: !1
        },
        series: [{
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
        colors: ["#2a76f4"],
        yaxis: {
            axisBorder: {
                show: !0,
                color: "#bec7e0"
            },
            axisTicks: {
                show: !0,
                color: "#bec7e0"
            }
        },
        xaxis: {
            categories: ["South Korea", "Canada", "United Kingdom", "Netherlands", "Italy", "France", "Japan", "United States", "China", "Germany"]
        },
        states: {
            hover: {
                filter: "none"
            }
        },
        grid: {
            borderColor: "#f1f3fa"
        }
    }),
    options = ((chart = new ApexCharts(document.querySelector("#apex_bar"), options)).render(), {
        chart: {
            height: 380,
            type: "line",
            stacked: !1,
            toolbar: {
                show: !1
            }
        },
        dataLabels: {
            enabled: !1
        },
        stroke: {
            width: [0, 0, 3]
        },
        series: [{
            name: "Income",
            type: "column",
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
        }, {
            name: "Cashflow",
            type: "column",
            data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
        }, {
            name: "Revenue",
            type: "line",
            data: [20, 29, 37, 36, 44, 45, 50, 58]
        }],
        colors: ["rgba(42, 118, 244, .18)", "#2a76f4", "rgba(251, 182, 36, .6)"],
        xaxis: {
            categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
            axisBorder: {
                show: !0,
                color: "#bec7e0"
            },
            axisTicks: {
                show: !0,
                color: "#bec7e0"
            }
        },
        yaxis: [{
            axisTicks: {
                show: !0
            },
            axisBorder: {
                show: !0,
                color: "#20016c"
            },
            labels: {
                style: {
                    color: "#20016c"
                }
            },
            title: {
                text: "Income (thousand crores)"
            }
        }, {
            axisTicks: {
                show: !0
            },
            axisBorder: {
                show: !0,
                color: "#77d0ba"
            },
            labels: {
                style: {
                    color: "#77d0ba"
                },
                offsetX: 10
            },
            title: {
                text: "Operating Cashflow (thousand crores)"
            }
        }, {
            opposite: !0,
            axisTicks: {
                show: !0
            },
            axisBorder: {
                show: !0,
                color: "#fa5c7c"
            },
            labels: {
                style: {
                    color: "#fa5c7c"
                }
            },
            title: {
                text: "Revenue (thousand crores)"
            }
        }],
        tooltip: {
            followCursor: !0,
            y: {
                formatter: function (e) {
                    return void 0 !== e ? e + " thousand crores" : e
                }
            }
        },
        grid: {
            borderColor: "#f1f3fa"
        },
        legend: {
            offsetY: 6
        },
        responsive: [{
            breakpoint: 600,
            options: {
                yaxis: {
                    show: !1
                },
                legend: {
                    show: !1
                }
            }
        }]
    });

function generateData1(e, t, a) {
    for (var o = 0, r = []; o < t;) {
        var n = Math.floor(Math.random() * (a.max - a.min + 1)) + a.min,
            s = Math.floor(61 * Math.random()) + 15;
        r.push([e, n, s]), e += 864e5, o++
    }
    return r
}(chart = new ApexCharts(document.querySelector("#apex_mixed"), options)).render();
var options2 = {
        chart: {
            height: 380,
            type: "bubble",
            toolbar: {
                show: !1
            }
        },
        dataLabels: {
            enabled: !1
        },
        series: [{
            name: "Product 1",
            data: generateData1(new Date("11 Feb 2017 GMT").getTime(), 20, {
                min: 10,
                max: 60
            })
        }, {
            name: "Product 2",
            data: generateData1(new Date("11 Feb 2017 GMT").getTime(), 20, {
                min: 10,
                max: 60
            })
        }, {
            name: "Product 3",
            data: generateData1(new Date("11 Feb 2017 GMT").getTime(), 20, {
                min: 10,
                max: 60
            })
        }, {
            name: "Product 4",
            data: generateData1(new Date("11 Feb 2017 GMT").getTime(), 20, {
                min: 10,
                max: 60
            })
        }],
        fill: {
            type: "gradient"
        },
        colors: ["#727cf5", "#0acf97", "#fa5c7c", "#39afd1"],
        xaxis: {
            tickAmount: 12,
            type: "datetime",
            labels: {
                rotate: 0
            },
            axisBorder: {
                show: !0,
                color: "#bec7e0"
            },
            axisTicks: {
                show: !0,
                color: "#bec7e0"
            }
        },
        yaxis: {
            max: 70
        },
        legend: {
            offsetY: 6
        },
        grid: {
            borderColor: "#f1f3fa"
        }
    },
    options = ((chart = new ApexCharts(document.querySelector("#apex_bubble"), options2)).render(), {
        chart: {
            height: 320,
            type: "candlestick",
            toolbar: {
                show: !1
            }
        },
        series: [{
            data: [{
                x: new Date(15387786e5),
                y: [6629.81, 6650.5, 6623.04, 6633.33]
            }, {
                x: new Date(15387804e5),
                y: [6632.01, 6643.59, 6620, 6630.11]
            }, {
                x: new Date(15387822e5),
                y: [6630.71, 6648.95, 6623.34, 6635.65]
            }, {
                x: new Date(1538784e6),
                y: [6635.65, 6651, 6629.67, 6638.24]
            }, {
                x: new Date(15387858e5),
                y: [6638.24, 6640, 6620, 6624.47]
            }, {
                x: new Date(15387876e5),
                y: [6624.53, 6636.03, 6621.68, 6624.31]
            }, {
                x: new Date(15387894e5),
                y: [6624.61, 6632.2, 6617, 6626.02]
            }, {
                x: new Date(15387912e5),
                y: [6627, 6627.62, 6584.22, 6603.02]
            }, {
                x: new Date(1538793e6),
                y: [6605, 6608.03, 6598.95, 6604.01]
            }, {
                x: new Date(15387948e5),
                y: [6604.5, 6614.4, 6602.26, 6608.02]
            }, {
                x: new Date(15387966e5),
                y: [6608.02, 6610.68, 6601.99, 6608.91]
            }, {
                x: new Date(15387984e5),
                y: [6608.91, 6618.99, 6608.01, 6612]
            }, {
                x: new Date(15388002e5),
                y: [6612, 6615.13, 6605.09, 6612]
            }, {
                x: new Date(1538802e6),
                y: [6612, 6624.12, 6608.43, 6622.95]
            }, {
                x: new Date(15388038e5),
                y: [6623.91, 6623.91, 6615, 6615.67]
            }, {
                x: new Date(15388056e5),
                y: [6618.69, 6618.74, 6610, 6610.4]
            }, {
                x: new Date(15388074e5),
                y: [6611, 6622.78, 6610.4, 6614.9]
            }, {
                x: new Date(15388092e5),
                y: [6614.9, 6626.2, 6613.33, 6623.45]
            }, {
                x: new Date(1538811e6),
                y: [6623.48, 6627, 6618.38, 6620.35]
            }, {
                x: new Date(15388128e5),
                y: [6619.43, 6620.35, 6610.05, 6615.53]
            }, {
                x: new Date(15388146e5),
                y: [6615.53, 6617.93, 6610, 6615.19]
            }, {
                x: new Date(15388164e5),
                y: [6615.19, 6621.6, 6608.2, 6620]
            }, {
                x: new Date(15388182e5),
                y: [6619.54, 6625.17, 6614.15, 6620]
            }, {
                x: new Date(153882e7),
                y: [6620.33, 6634.15, 6617.24, 6624.61]
            }, {
                x: new Date(15388218e5),
                y: [6625.95, 6626, 6611.66, 6617.58]
            }, {
                x: new Date(15388236e5),
                y: [6619, 6625.97, 6595.27, 6598.86]
            }, {
                x: new Date(15388254e5),
                y: [6598.86, 6598.88, 6570, 6587.16]
            }, {
                x: new Date(15388272e5),
                y: [6588.86, 6600, 6580, 6593.4]
            }, {
                x: new Date(1538829e6),
                y: [6593.99, 6598.89, 6585, 6587.81]
            }, {
                x: new Date(15388308e5),
                y: [6587.81, 6592.73, 6567.14, 6578]
            }, {
                x: new Date(15388326e5),
                y: [6578.35, 6581.72, 6567.39, 6579]
            }, {
                x: new Date(15388344e5),
                y: [6579.38, 6580.92, 6566.77, 6575.96]
            }, {
                x: new Date(15388362e5),
                y: [6575.96, 6589, 6571.77, 6588.92]
            }, {
                x: new Date(1538838e6),
                y: [6588.92, 6594, 6577.55, 6589.22]
            }, {
                x: new Date(15388398e5),
                y: [6589.3, 6598.89, 6589.1, 6596.08]
            }, {
                x: new Date(15388416e5),
                y: [6597.5, 6600, 6588.39, 6596.25]
            }, {
                x: new Date(15388434e5),
                y: [6598.03, 6600, 6588.73, 6595.97]
            }, {
                x: new Date(15388452e5),
                y: [6595.97, 6602.01, 6588.17, 6602]
            }, {
                x: new Date(1538847e6),
                y: [6602, 6607, 6596.51, 6599.95]
            }, {
                x: new Date(15388488e5),
                y: [6600.63, 6601.21, 6590.39, 6591.02]
            }, {
                x: new Date(15388506e5),
                y: [6591.02, 6603.08, 6591, 6591]
            }, {
                x: new Date(15388524e5),
                y: [6591, 6601.32, 6585, 6592]
            }, {
                x: new Date(15388542e5),
                y: [6593.13, 6596.01, 6590, 6593.34]
            }, {
                x: new Date(1538856e6),
                y: [6593.34, 6604.76, 6582.63, 6593.86]
            }, {
                x: new Date(15388578e5),
                y: [6593.86, 6604.28, 6586.57, 6600.01]
            }, {
                x: new Date(15388596e5),
                y: [6601.81, 6603.21, 6592.78, 6596.25]
            }, {
                x: new Date(15388614e5),
                y: [6596.25, 6604.2, 6590, 6602.99]
            }, {
                x: new Date(15388632e5),
                y: [6602.99, 6606, 6584.99, 6587.81]
            }, {
                x: new Date(1538865e6),
                y: [6587.81, 6595, 6583.27, 6591.96]
            }, {
                x: new Date(15388668e5),
                y: [6591.97, 6596.07, 6585, 6588.39]
            }, {
                x: new Date(15388686e5),
                y: [6587.6, 6598.21, 6587.6, 6594.27]
            }, {
                x: new Date(15388704e5),
                y: [6596.44, 6601, 6590, 6596.55]
            }, {
                x: new Date(15388722e5),
                y: [6598.91, 6605, 6596.61, 6600.02]
            }, {
                x: new Date(1538874e6),
                y: [6600.55, 6605, 6589.14, 6593.01]
            }, {
                x: new Date(15388758e5),
                y: [6593.15, 6605, 6592, 6603.06]
            }, {
                x: new Date(15388776e5),
                y: [6603.07, 6604.5, 6599.09, 6603.89]
            }, {
                x: new Date(15388794e5),
                y: [6604.44, 6604.44, 6600, 6603.5]
            }, {
                x: new Date(15388812e5),
                y: [6603.5, 6603.99, 6597.5, 6603.86]
            }, {
                x: new Date(1538883e6),
                y: [6603.85, 6605, 6600, 6604.07]
            }, {
                x: new Date(15388848e5),
                y: [6604.98, 6606, 6604.07, 6606]
            }]
        }],
        xaxis: {
            type: "datetime",
            axisBorder: {
                show: !0,
                color: "#bec7e0"
            },
            axisTicks: {
                show: !0,
                color: "#bec7e0"
            }
        },
        yaxis: {
            labels: {
                formatter: function (e) {
                    return "$" + e
                }
            },
            tooltip: {
                enabled: !0
            }
        },
        grid: {
            strokeDashArray: 4
        }
    }),
    options = ((chart = new ApexCharts(document.querySelector("#apex_candlestick"), options)).render(), {
        series: [{
            data: [{
                x: "New Delhi",
                y: 218
            }, {
                x: "Kolkata",
                y: 149
            }, {
                x: "Mumbai",
                y: 184
            }, {
                x: "Ahmedabad",
                y: 55
            }, {
                x: "Bangaluru",
                y: 84
            }, {
                x: "Pune",
                y: 31
            }, {
                x: "Chennai",
                y: 70
            }, {
                x: "Jaipur",
                y: 30
            }, {
                x: "Surat",
                y: 44
            }, {
                x: "Hyderabad",
                y: 68
            }, {
                x: "Lucknow",
                y: 28
            }, {
                x: "Indore",
                y: 19
            }, {
                x: "Kanpur",
                y: 29
            }]
        }],
        legend: {
            show: !1
        },
        chart: {
            height: 350,
            type: "treemap",
            toolbar: {
                show: !1
            }
        }
    }),
    options = ((chart = new ApexCharts(document.querySelector("#treemap_1"), options)).render(), {
        series: [{
            data: [{
                x: "New Delhi",
                y: 218
            }, {
                x: "Kolkata",
                y: 149
            }, {
                x: "Mumbai",
                y: 184
            }, {
                x: "Ahmedabad",
                y: 55
            }, {
                x: "Bangaluru",
                y: 84
            }, {
                x: "Pune",
                y: 31
            }, {
                x: "Chennai",
                y: 70
            }, {
                x: "Jaipur",
                y: 30
            }, {
                x: "Surat",
                y: 44
            }, {
                x: "Hyderabad",
                y: 68
            }, {
                x: "Lucknow",
                y: 28
            }, {
                x: "Indore",
                y: 19
            }, {
                x: "Kanpur",
                y: 29
            }]
        }],
        legend: {
            show: !1
        },
        chart: {
            height: 350,
            type: "treemap",
            toolbar: {
                show: !1
            }
        },
        colors: ["#3B93A5", "#F7B844", "#ADD8C7", "#EC3C65", "#CDD7B6", "#C1F666", "#D43F97", "#1E5D8C", "#421243", "#7F94B0", "#EF6537", "#C0ADDB"],
        plotOptions: {
            treemap: {
                distributed: !0,
                enableShades: !1
            }
        }
    }),
    options = ((chart = new ApexCharts(document.querySelector("#treemap_2"), options)).render(), {
        series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
        chart: {
            type: "polarArea",
            width: 380
        },
        stroke: {
            colors: ["#fff"]
        },
        fill: {
            opacity: .8
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: "bottom"
                }
            }
        }]
    }),
    options = ((chart = new ApexCharts(document.querySelector("#polar_Area_1"), options)).render(), {
        series: [42, 47, 52, 58, 65],
        chart: {
            width: 380,
            type: "polarArea"
        },
        labels: ["Rose A", "Rose B", "Rose C", "Rose D", "Rose E"],
        fill: {
            opacity: 1
        },
        stroke: {
            width: 1,
            colors: void 0
        },
        yaxis: {
            show: !1
        },
        legend: {
            position: "bottom"
        },
        plotOptions: {
            polarArea: {
                rings: {
                    strokeWidth: 0
                }
            }
        },
        theme: {
            monochrome: {
                enabled: !0,
                shadeTo: "light",
                shadeIntensity: .6
            }
        }
    }),
    options = ((chart = new ApexCharts(document.querySelector("#polar_Area_2"), options)).render(), {
        chart: {
            height: 320,
            type: "pie"
        },
        stroke: {
            show: !0,
            width: 2,
            colors: ["transparent"]
        },
        series: [50, 50, 50],
        labels: ["Series 1", "Series 2", "Series 3"],
        colors: ["#d9e6fd", "#4a8af6", "#fbc659"],
        legend: {
            show: !0,
            position: "bottom",
            horizontalAlign: "center",
            verticalAlign: "middle",
            floating: !1,
            fontSize: "14px",
            offsetX: 0,
            offsetY: 6
        },
        responsive: [{
            breakpoint: 600,
            options: {
                chart: {
                    height: 240
                },
                legend: {
                    show: !1
                }
            }
        }]
    }),
    options = ((chart = new ApexCharts(document.querySelector("#apex_pie1"), options)).render(), {
        chart: {
            height: 320,
            type: "donut"
        },
        stroke: {
            show: !0,
            width: 2,
            colors: ["transparent"]
        },
        series: [50, 50, 50],
        legend: {
            show: !0,
            position: "bottom",
            horizontalAlign: "center",
            verticalAlign: "middle",
            floating: !1,
            fontSize: "14px",
            offsetX: 0,
            offsetY: 6
        },
        labels: ["Series 1", "Series 2", "Series 3"],
        colors: ["#d9e6fd", "#4a8af6", "#fbc659"],
        responsive: [{
            breakpoint: 600,
            options: {
                chart: {
                    height: 240
                },
                legend: {
                    show: !1
                }
            }
        }],
        fill: {
            type: "gradient"
        }
    }),
    options = ((chart = new ApexCharts(document.querySelector("#apex_pie2"), options)).render(), {
        chart: {
            height: 320,
            type: "donut"
        },
        stroke: {
            show: !0,
            width: 2,
            colors: ["transparent"]
        },
        series: [50, 50, 50],
        colors: ["#a3cae0", "#232f5b", "#f06a6c"],
        labels: ["Comedy", "Action", "SciFi"],
        dataLabels: {
            dropShadow: {
                blur: 3,
                opacity: .8
            }
        },
        fill: {
            type: "pattern",
            opacity: 1,
            pattern: {
                enabled: !0,
                style: ["verticalLines", "squares", "horizontalLines", "circles", "slantedLines"]
            }
        },
        states: {
            hover: {
                enabled: !1
            }
        },
        legend: {
            show: !0,
            position: "bottom",
            horizontalAlign: "center",
            verticalAlign: "middle",
            floating: !1,
            fontSize: "14px",
            offsetX: 0,
            offsetY: 6
        },
        responsive: [{
            breakpoint: 600,
            options: {
                chart: {
                    height: 240
                },
                legend: {
                    show: !1
                }
            }
        }]
    }),
    options = ((chart = new ApexCharts(document.querySelector("#apex_pie3"), options)).render(), {
        chart: {
            height: 320,
            type: "radialBar"
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: "70%"
                },
                track: {
                    background: "#b9c1d4",
                    opacity: .5
                },
                dataLabels: {
                    name: {
                        fontSize: "18px"
                    },
                    value: {
                        fontSize: "16px",
                        color: "#8997bd"
                    }
                }
            }
        },
        colors: ["#4a8af6"],
        series: [70],
        labels: ["CRICKET"]
    }),
    options = ((chart = new ApexCharts(document.querySelector("#apex_radialbar1"), options)).render(), {
        chart: {
            height: 350,
            type: "radialBar"
        },
        plotOptions: {
            radialBar: {
                track: {
                    background: "#b9c1d4",
                    opacity: .5
                },
                dataLabels: {
                    name: {
                        fontSize: "22px"
                    },
                    value: {
                        fontSize: "16px",
                        color: "#8997bd"
                    },
                    total: {
                        show: !0,
                        label: "Total",
                        color: "#8997bd",
                        formatter: function (e) {
                            return 249
                        }
                    }
                }
            }
        },
        series: [44, 55, 67, 83],
        labels: ["Apples", "Oranges", "Bananas", "Berries"]
    }),
    options = ((chart = new ApexCharts(document.querySelector("#apex_radialbar2"), options)).render(), {
        chart: {
            height: 380,
            type: "radialBar"
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                track: {
                    background: "#b9c1d4",
                    opacity: .3
                },
                dataLabels: {
                    name: {
                        fontSize: "16px",
                        color: "#8997bd",
                        offsetY: 120
                    },
                    value: {
                        offsetY: 76,
                        fontSize: "22px",
                        color: "#8997bd",
                        formatter: function (e) {
                            return e + "%"
                        }
                    }
                }
            }
        },
        fill: {
            gradient: {
                enabled: !0,
                shade: "dark",
                shadeIntensity: .15,
                inverseColors: !1,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91]
            }
        },
        stroke: {
            dashArray: 4
        },
        colors: ["#4a8af6"],
        series: [67],
        labels: ["Median Ratio"],
        responsive: [{
            breakpoint: 380,
            options: {
                chart: {
                    height: 280
                }
            }
        }]
    }),
    randomizeArray = ((chart = new ApexCharts(document.querySelector("#apex_radialbar3"), options)).render(), Apex.grid = {
        padding: {
            right: 0,
            left: 0
        }
    }, Apex.dataLabels = {
        enabled: !1
    }, function (e) {
        for (var t, a, o = e.slice(), r = o.length; 0 !== r;) a = Math.floor(Math.random() * r), t = o[--r], o[r] = o[a], o[a] = t;
        return o
    }),
    sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46],
    colorPalette = ["#00D8B6", "#008FFB", "#FEB019", "#FF4560", "#775DD0"],
    spark1 = {
        chart: {
            type: "area",
            height: 160,
            sparkline: {
                enabled: !0
            }
        },
        stroke: {
            width: 2,
            curve: "straight"
        },
        fill: {
            opacity: .2
        },
        series: [{
            name: "Metrica Sales ",
            data: randomizeArray(sparklineData)
        }],
        yaxis: {
            min: 0
        },
        colors: ["#f93b7a"],
        title: {
            text: "$424,652",
            offsetX: 20,
            style: {
                fontSize: "24px",
                color: "#8997bd",
                fontWeight: "500"
            }
        },
        subtitle: {
            text: "Sales",
            offsetX: 20,
            style: {
                fontSize: "14px",
                color: "#8997bd"
            }
        }
    },
    spark2 = (new ApexCharts(document.querySelector("#spark1"), spark1).render(), {
        chart: {
            type: "area",
            height: 160,
            sparkline: {
                enabled: !0
            }
        },
        stroke: {
            width: 2,
            curve: "stepline"
        },
        fill: {
            opacity: .2
        },
        series: [{
            name: "Metrica Expenses ",
            data: randomizeArray(sparklineData)
        }],
        yaxis: {
            min: 0
        },
        colors: ["#fbb624"],
        title: {
            text: "$235,312",
            offsetX: 20,
            style: {
                fontSize: "24px",
                color: "#8997bd",
                fontWeight: "500"
            }
        },
        subtitle: {
            text: "Expenses",
            offsetX: 20,
            style: {
                fontSize: "14px",
                color: "#8997bd"
            }
        }
    }),
    spark3 = (new ApexCharts(document.querySelector("#spark2"), spark2).render(), {
        chart: {
            type: "area",
            height: 160,
            sparkline: {
                enabled: !0
            }
        },
        stroke: {
            width: 2,
            curve: "smooth"
        },
        fill: {
            opacity: .2
        },
        series: [{
            name: "Net Profits ",
            data: randomizeArray(sparklineData)
        }],
        xaxis: {
            crosshairs: {
                width: 1
            }
        },
        yaxis: {
            min: 0
        },
        colors: ["#0acf97"],
        title: {
            text: "$135,965",
            offsetX: 20,
            style: {
                fontSize: "24px",
                color: "#8997bd",
                fontWeight: "500"
            }
        },
        subtitle: {
            text: "Profits",
            offsetX: 20,
            style: {
                fontSize: "14px",
                color: "#8997bd"
            }
        }
    });
new ApexCharts(document.querySelector("#spark3"), spark3).render();
