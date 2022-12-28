<template>
    <div class="button">
        <div class="button_content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppButton",
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped>
.button {
    clip-path: polygon(10% 0, 100% 0, 100% 60%, 89.8% 100%, 0 100%, 0 40%);
    padding: 5px;
    background: linear-gradient(106.95deg, rgba(1, 167, 255, 0.1) 0.4%, rgba(255, 0, 245, 0.1) 103.58%);
    box-shadow: inset 2.33178px 3.39168px 6.99534px rgba(255, 255, 255, 0.11);
    backdrop-filter: blur(19.7141px);
    &_content {
        cursor: pointer;
        font-family: "Octosquares-Bold";
        clip-path: polygon(10% 0, 100% 0, 100% 55%, 89.8% 100%, 0 100%, 0 45%);

        background-clip: padding-box;
        font-size: 20px;
        text-align: center;
        padding: 10px 55px;
        background: linear-gradient(106.95deg,
                rgba(1, 167, 255, 0.8) 0.4%,
                rgba(255, 0, 245, 0.8) 103.58%);

        opacity: 0.85;
        &:hover {
            opacity: 1;
        }

    }
}

@media (max-width: 2000px) {

    .button {
        padding: 3px;
        &_content {

            font-size: 16px;
            line-height: 24px;
            padding: 10px 50px;

        }
    }

}
</style>