<template>
    <div class="home">
        <div class="my-info">
            <p class="my-info-title">热爱！</p>
            <div>
                <h3>世间万物都有其定数，唯有努力和耐心</h3>
                <h3>才能改变自己的命运。</h3>
            </div>

        </div>
        <div class="to-begin">
            <DownOutlined />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.home {
    height: 100%;
    width: 100%;
    background: url("67bd05fb4667dff7f6adeef35fa5b82.jpg") no-repeat center center / 100% 100%;

    div.my-info {
        z-index: 4;
        position: absolute;
        width: 400px;
        height: auto;
        text-align: center;
        left: calc(50% - 200px);
        color: white;
        bottom: 100px;

        .my-info-title {
            font-size: 42px;
            font-weight: bold;
            color: white;
            margin-bottom: 0;
        }

        p, div {
            transition: all .38s;

            &:hover {
                transform: scale(1.1);
                cursor: pointer;
            }
        }
    }

    div.to-begin {
        z-index: 3;
        position: absolute;
        width: 150px;
        height: 50px;
        color: white;
        font-size: 42px;
        left: calc(50% - 75px);
        bottom: 25px;
        text-align: center;

        span {
            transition: all .38s;
            cursor: pointer;
            opacity: .7;
            animation: arrowMoveUp 4s 2s infinite;

            &:hover {
                opacity: 1;
            }
        }
    }
}
</style>
