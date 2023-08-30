class countryInfo {
    constructor (id, regexPattern, errorMsg) {
        this.id = id;
        this.regexPattern = regexPattern;
        this.errorMsg = errorMsg; 
    }
}

const ch = new countryInfo("Switzerland", "^(CH-)?\\d{4}$", "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950");
const fr = new countryInfo("France", "^(F-)?\\d{5}$", "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012");
const de = new countryInfo("Germany", "^(D-)?\\d{5}$", "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345");
const it = new countryInfo("Italy", "^(I-)?\\d{5}$", "Italy ZIPs must have exactly 5 digits: e.g. I-12345 or 12345");
const nl = new countryInfo("The Netherlands", "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$", "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS");

const countries = [];

countries.push(fr, de, it, nl, ch);

export {countries}