export default {
    logo: (
        <>
            {/* <img src="https://raw.githubusercontent.com/hellodun/towards_cloud_native/ed58e603fbaec2a8a43185ee5125bd0e1c9165ff/images/logo%20v3%20white.svg" width="6%" height="6%" alt="tcn logo" style={{ marginRight: '20px' }}/> */}

            <svg width="6%" height="6%" viewBox="0 0 373 373" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M192.574 14.0244L317.56 74.2141C321.398 76.0627 324.186 79.5586 325.134 83.7124L356.003 218.957C356.951 223.111 355.956 227.47 353.3 230.801L266.807 339.26C264.151 342.591 260.122 344.531 255.862 344.531H117.138C112.878 344.531 108.849 342.591 106.193 339.26L19.7004 230.801C17.044 227.47 16.049 223.111 16.9971 218.957L47.8659 83.7123C48.8139 79.5586 51.6018 76.0627 55.4405 74.2141L180.426 14.0244C184.264 12.1758 188.736 12.1758 192.574 14.0244Z" stroke="#D9D9D9" stroke-width="20" />
                <path d="M238.296 252.25H158.608C146.438 252.247 134.509 248.86 124.153 242.467C113.797 236.074 105.423 226.928 99.9664 216.05C94.5096 205.171 92.1853 192.99 93.2531 180.867C94.3209 168.744 98.7388 157.157 106.013 147.4C113.287 137.643 123.131 130.101 134.445 125.617C145.759 121.133 158.097 119.883 170.08 122.007C182.063 124.132 193.22 129.546 202.303 137.646C211.386 145.746 218.037 156.212 221.514 167.875H238.296C249.485 167.875 260.215 172.32 268.127 180.231C276.038 188.143 280.483 198.874 280.483 210.063C280.483 221.251 276.038 231.982 268.127 239.894C260.215 247.805 249.485 252.25 238.296 252.25Z" fill="#D9D9D9" stroke="#D9D9D9" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" />
            </svg>


            <br />
            <span style={{ marginLeft: "20px", fontWeight: "bold" }} >towards Cloud Native</span>
        </>
    ),
    project: {
        link: "https://github.com/hellodun/towards_cloud_native"
    },
    // chat: {
    //     link: "https://discord.gg"
    // }
    useNextSeoProps() {
        return {
            titleTemplate: '%s – towards Cloud Native'
        }
    },
    docsRepositoryBase: "https://github.com/hellodun/towards_cloud_native/tree/main",

}