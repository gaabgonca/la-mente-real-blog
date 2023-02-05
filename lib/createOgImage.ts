const e = (str: string) => encodeURIComponent(encodeURIComponent(str))
import { OG_DESCRIPTION, OG_NAME } from "./constants";

const createOgImage  = () : string => {
    return ([
        ///This is the default background it's a presentation card format with rounded corners and an an
        "https://res.cloudinary.com/dqkhbw615/image/upload/c_scale,h_200,q_auto:best,w_200/c_mpad,g_center,h_232,q_auto:best,w_232/b_rgb:ffffff,c_lpad,g_west,h_480,q_auto:best,r_80,w_800",
        
        `l_text:Arial_200_bold:${e(OG_NAME)},co_rgb:000000,w_500`,
        `fl_layer_apply,g_north_west,x_250,y_175`,
        `l_text:Arial_200:${e(OG_DESCRIPTION)},co_rgb:666666,w_500`,
        `fl_layer_apply,g_north_west,x_250,y_250`,
        
        
        
        //Original favicon @see /public/assets/new-favicon/favicon.svg for source
        "v1675625157/la-mente-real-blog/new-favicon/favicon_c47rkz.png"

    ].join('/'))
}

export default createOgImage;