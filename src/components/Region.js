
const Region = (area) => {
    var region;
    switch(area) {
        //North & North-East together, 15
        case "Ang Mo Kio":
        case "Hougang":
        case "Punggol":
        case "Seletar":
        case "Sengkang":
        case "Serangoon":
        case "Central Water Catchment":
        case "Lim Chu Kang":
        case "Mandai":
        case "Sungei Kadut":
        case "Woodlands":
        case "Yishun":
        case "Pulau Ubin":
        case "Pulau Tekong":
        case "Sembawang":
            region = "north-northeast"
            break;
            
        //South aka Central, 13
        case "Bishan":
        case "Bukit Merah":
        case "Bukit Timah":
        case "City":
        case "Geylang":
        case "Kallang":
        case "Marine Parade":
        case "Queenstown":
        case "Southern Islands":
        case "Toa Payoh":
        case "Novena":
        case "Sentosa":
        case "Tanglin":
            region = "south-central"
            break;

        //East, 5
        case "Bedok":
        case "Changi":
        case "Paya Lebar":
        case "Pasir Ris":
        case "Tampines":
            region = "east"
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
            region = "west"
            break;
    };
};

export default Region;