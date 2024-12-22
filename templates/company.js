module.exports = ({ message }) => `
    <section class="v-flex" style="width: 100%; display: flex; flex-direction: column; gap: 3px; align-items: center;">
        <div style="max-width: 700px; width: 100%;box-shadow: 0 0 4px rgb(199, 199, 199);">
            <section class="v-flex" style="background-color: rgb(0, 27, 0); padding: 1.5rem; color: white; width: 100%; display: flex; flex-gap: 3px; align-items: center;">
                <img src="https://mirusgrace.com/static/media/logo.b35beb61f956d88f1822.png" alt="Mirus Grace Logo" width="70" style="margin-right: 1rem;>
                <h1 style="font-size:larger;>Mirus Grace Limitted</h1>
            </section>
            <div style="padding-inline: 2rem; width: 100%;">
                <p>${message}</p>
                <br>
                <p>Best Regards,<br><b>Mirus Grace Limitted</b></p>
            </div>
    
            <br>
            <div class="v-flex"
                style="padding-block: 1rem; border-block: 1px solid rgb(173, 173, 173); width: 100%; display: flex; flex-direction: column; gap: 3px; align-items: center;">
                <small style="color: gray;">PLEASE ALSO FOLLOW US HERE</small>
            </div>
            <div class="v-flex" style="width: 100%;">
                <div class="flex jc"
                    style="margin-block: 1rem; width: 100%; display: flex; gap: 3px; align-items: center; justify-content: center;">
                    <img src="https://png.pngtree.com/element_our/sm/20180509/sm_5af29f0006117.jpg" alt="" width="30" style="margin-inline: 6px;">
                    <img src="https://e7.pngegg.com/pngimages/670/159/png-clipart-facebook-logo-social-media-facebook-computer-icons-linkedin-logo-facebook-icon-media-internet-thumbnail.png" alt="" width="30" style="margin-inline: 6px;">
                </div>
                <br>

                <br>
                <span style="margin-block: 0.5rem; color: gray;">
                    <small>MirusGrace © 2024 All right reserved.</small>
                </span>
            </div>
        </div>
    </section>
`;
