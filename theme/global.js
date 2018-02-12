import variables from './core/variables'

export default (global = `
    body {
        margin: 0;
        background: ${variables.white};
        color: ${variables.primary};
    }
    @font-face {
        font-family: ApBold;
        src: url('/fonts/AP-Bold.woff') format('woff');
    }
    @font-face {
        font-family: ApRegular;
        src: url('/fonts/AP-Regular.woff') format('woff');
    }
    @font-face {
        font-family: NHGDSPBold;
        src: url('/fonts/NHGDSP-Bold.woff') format('woff');
    }
    @font-face {
        font-family: NHGDSPMedium;
        src: url('/fonts/NHGDSP-Medium.woff') format('woff');
    }
`)
