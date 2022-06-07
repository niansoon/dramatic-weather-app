
const Region = (area) => {
    var userArea;
    switch (area) {
        //North & North-East together, 14
        case "Ang Mo Kio":
        case "Hougang":
        case "Punggol":
        case "Seletar":
        case "Sengkang":
        case "Serangoon":
        case "Lim Chu Kang":
        case "Mandai":
        case "Sungei Kadut":
        case "Woodlands":
        case "Yishun":
        case "Pulau Ubin":
        case "Pulau Tekong":
        case "Sembawang":
            userArea = "north"
            break;

        //South aka Central, 8
        case "Bukit Merah":
        case "City":
        case "Geylang":
        case "Marine Parade":
        case "Queenstown":
        case "Southern Islands":
        case "Sentosa":
        case "Tanglin":
            userArea = "south"
            break;

        //East, 5
        case "Bedok":
        case "Changi":
        case "Paya Lebar":
        case "Pasir Ris":
        case "Tampines":
            userArea = "east"
            break;

        //West, 14
        case "Bukit Batok":
        case "Bukit Panjang":
        case "Boon Lay":
        case "Pioneer":
        case "Choa Chu Kang":
        case "Clementi":
        case "Jurong East":
        case "Jurong West":
        case "Tengah":
        case "Western Islands":
        case "Western Water Catchment":
        case "Jurong Island":
        case "Jalan Bahar":
        case "Tuas":
            userArea = "west"
            break;

        //Central, 5
        case "Kallang":
        case "Toa Payoh":
        case "Novena":
        case "Bukit Timah":
        case "Bishan":
        case "Central Water Catchment":
            userArea = "central"
            break;
    };
};

export default Region;