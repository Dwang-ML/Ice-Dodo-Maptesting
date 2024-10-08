var map = {
    title: "The Ringed Box",
    song: "env2",
    maker: "Bong",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([-0.03, -60.21, -62.88], [0, 0, 0], [80, 6, 5], "550f9d,0.75", 0, 0, 0.6, false, false, true, false);
        a.p([-3.03, 1.08, -22.48], [-4.71, 0, 0], [2, 3, 14], "00000a", 0, 0, 0.6, false, false, true, false);
        a.p([-8.36, -60.87, -154.25], [0.79, 0, 0], [2, 1.1, 5], "ff0000", 0, 0, 0.6, false, true, false, false);
        a.p([-0.03, -0.87, -2.46], [0, 0, 0], [500, 1, 20], "4a4a4a", 0, 0, 0.6, false, false, false, false);
        a.p([-0.03, -60.87, -103.24], [0, 0, 0], [20, 1, 20], "ffff00", 0, 0, 0.6, false, false, false, false);
        a.p([-0.03, -10.37, -203.14], [0, 0, 0], [20, 20, 20], "2e1b04", 0, 0, 0.6, false, false, false, false);
        a.p([-0.03, 20.87, -388.98], [0, -1.57, 0], [44, 2, 44], "ffff00", 0, 0, 0.6, false, false, false, false);
        a.p([3.94, -0.77, -84.27], [-0.37, 0, 0], [2, 1, 26], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.p([-0.03, -0.91, -236.37], [0, 0, 0], [44, 1, 47], "ffff00", 0, 0, 0.6, true, false, false, false);
        a.p([2.72, -0.24, -332.07], [0, 0, 0], [5.5, 1, 2], "550f9d", 0, 0, 0.6, false, false, true, false);
        a.p([-2.29, 1.71, -62.88], [0, 0, -0.79], [3, 1, 1], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.p([-2.29, 3.17, -62.88], [0, 0, 0.79], [3, 1, 1], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.p([-0.03, -0.87, -144.14], [0, 0, 0], [20, 1, 24], "aaaaaa", 0, 0, 0.6, true, false, false, false);
        a.p([21.97, 21.58, -234.98], [-1.57, 0, 0], [44, 44, 2], "550f9d", 0, 0, 0.6, false, false, true, false);
        a.p([-0.03, -1.07, -322.98], [0, 0, 0], [9, 1, 132], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.p([0.33, 0.52, -143.14], [-0.79, 0, 0], [27, 2, 2], "fc8a17", 0, 0, 0.6, false, false, true, false);
        a.p([-12.03, 4.58, -214.23], [0, -1.57, 0], [20, 2, 10], "550f9d", 0, 0, 0.6, false, false, true, false);
        a.p([-7.53, -0.42, -62.88], [0, 0, 0], [5, 2, 21], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([-0.03, -0.24, -318.87], [0, 0, 0], [5.5, 1, 2], "550f9d", 0, 0, 0.6, false, false, true, false);
        a.p([-0.2, -60.87, -68.35], [-0.79, 0, 0], [2, 1.1, 5], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.p([-0.03, -0.87, -82.33], [0, 0, 0], [20, 1, 20], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([-0.03, -0.42, -215.22], [0, 0, 0], [44, 0.1, 4], "ffff00", 0, 0, 0.6, false, false, false, false);
        a.p([-2.53, -60.87, -92.14], [0, 0, 0], [15, 20, 2], "550f9d", 0, 0, 0.6, false, false, false, false);
        a.p([0.42, 2.42, -62.88], [0, 0, 0], [7, 1, 1], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.p([2.72, -0.24, -279.27], [0, 0, 0], [5.5, 1, 2], "550f9d", 0, 0, 0.6, false, false, true, false);
        a.p([-0.03, -0.87, -42.49], [0, 0, 0], [6.66, 1, 6.66], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([7.5, -0.42, -62.88], [0, 0, 0], [5, 2, 21], "aaaaaa", 0, 0, 0.6, false, true, false, false);
        a.p([0.33, -10.5, -192.25], [0, 0, 0], [500, 20, 40], "0e87cc,0.5", 0, 0, 0.6, false, true, false, false);
        a.p([-22.03, 21.58, -234.98], [-1.57, 0, 0], [44, 44, 2], "550f9d", 0, 0, 0.6, false, false, true, false);
        a.p([7.97, 1.08, -22.5], [-4.71, 0, 0], [2, 3, 4.5], "00000a", 0, 0, 0.6, false, false, true, false);
        a.p([11.71, -54.65, -62.88], [0, 0, 0.79], [20, 1, 22], "ffff00,0.2", 0, 0, 0.6, false, false, false, false);
        a.p([-0.03, 26.58, -214.23], [0, -1.57, 0], [44, 2, 34], "550f9d", 0, 0, 0.6, false, true, false, false);
        a.p([-22.03, 20.87, -322.98], [-1.57, 0, 0], [132, 44, 2], "550f9d", 0, 0, 0.6, false, false, false, false);
        a.p([-0.03, -1.34, -322.98], [0, 0, 0], [44, 0.1, 132], "550f9d", 0, 0, 0.6, false, false, true, false);
        a.p([0.33, -52.39, -163.14], [0, 0, -1.57], [40, 2, 2], "550f9d", 0, 0, 0.6, false, false, true, false);
        a.p([-0.03, -0.87, -103.24], [0, 0, 0], [20, 1, 25], "aaaaaa", 0, 0, 0.6, true, false, false, false);
        a.p([0, 4.58, -214.23], [0, -1.57, 0], [20, 1, 10], "00000a", 0, 0, 0.6, false, true, false, false);
        a.p([-0.03, -13.46, -66.06], [0, 0, 0], [80, 15, 6], "fc8a17,0.75", 0, 0, 0.6, false, false, true, false);
        a.p([-0.03, -10.5, -92.25], [0, 0, 0], [500, 20, 160.04], "345c1b", 0, 0, 0.6, false, true, false, false);
        a.p([-0.03, -0.87, -62.88], [0, 0, 0], [10, 1, 21], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([-2.78, -0.24, -305.67], [0, 0, 0], [5.5, 1, 2], "550f9d", 0, 0, 0.6, false, false, true, false);
        a.p([4.97, -60.37, -27.49], [0, 0, 0], [1.5, 2, 2], "550f9d", 0, 0, 0.6, false, false, true, false);
        a.p([4.97, -60.37, -37.49], [0, 0, 0], [3, 3, 3], "550f9d", 0, 0, 0.6, false, false, true, false);
        a.p([-0.03, -0.87, -22.46], [0, 0, 0], [20, 1, 20], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([-7.53, -60.87, -115.74], [0, 0, 0], [5, 1, 8], "ffff00", 0, 0, 0.6, false, false, false, false);
        a.p([-0.03, -0.24, -349.38], [0, 0, 0], [9, 1, 2], "550f9d", 0, 0, 0.6, false, false, true, false);
        a.p([-0.38, 10.07, -383.69], [0, 0, -2.36], [0.5, 2, 2], "00000a", 0, 0, 0.6, false, false, false, false);
        a.p([-0.03, -0.87, -163.14], [0, 0, 0], [20, 1, 20], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([4.97, -60.87, -37.49], [0, 0, 0], [10, 0.5, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([-0.03, 0.58, -33.66], [0, 0, 0], [2, 2, 2], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.p([-6.69, -0.87, -49.16], [0, 0, 0], [6.66, 1, 6.66], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([-0.03, -60.87, -70.41], [0.79, 0, 0], [2, 1.1, 5], "ff0000", 0, 0, 0.6, false, false, false, false);
        a.p([11.97, 4.58, -214.23], [0, -1.57, 0], [20, 2, 10], "550f9d", 0, 0, 0.6, false, false, true, false);
        a.p([-0.03, -61.87, 12.04], [0, 0, 0], [9, 1, 9], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([-0.03, -0.24, -292.47], [0, 0, 0], [5.5, 1, 2], "550f9d", 0, 0, 0.6, false, false, true, false);
        a.p([-5.03, -60.87, -47.49], [0, 0, 0], [10, 0.5, 10], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([-5.03, -1.07, -322.98], [0, 0, 0], [1, 1, 132], "ffff00", 0, 0, 0.6, false, false, false, false);
        a.p([4.97, -1.07, -322.98], [0, 0, 0], [1, 1, 132], "ffff00", 0, 0, 0.6, false, false, false, false);
        a.p([0.81, 10.07, -383.69], [0, 0, -0.79], [0.5, 2, 2], "00000a", 0, 0, 0.6, false, false, false, false);
        a.p([21.97, 20.87, -322.98], [-1.57, 0, 0], [132, 44, 2], "550f9d", 0, 0, 0.6, false, false, false, false);
        a.p([-2.85, -60.43, 13.17], [0, 0, 0], [2, 2, 2], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.p([6.64, -0.87, -35.82], [0, 0, 0], [6.66, 1, 6.66], "aaaaaa", 0, 0, 0.6, false, false, false, false);
        a.p([-6.29, -60.87, -154.25], [-0.79, -0.05, 0], [2, 1.1, 5], "ff0000", 0, 0, 0.6, false, true, false, false);
        a.p([0.33, 7.61, -163.02], [0, 0, -1.57], [27, 2, 2], "fc8a17", 0, 0, 0.6, false, false, true, false);
        a.p([0.33, 7.61, -163.02], [0, 0, 0], [27, 2, 2], "fc8a17", 0, 0, 0.6, false, false, true, false);
        a.p([10, -0.08, -384.32], [0, 0, 0], [2, 2, 2], "ffffff", 0, 0, 0.6, false, false, false, false);
        a.p([-0.03, 42.08, -323.13], [0, -1.57, 0], [46, 220, 3], "550f9d", 0, 0, 0.6, false, false, false, false);
        a.s([-0.03, 11.09, -385.31], 5.26, "550f9d", 0, 0, 0.6, false, false);
        a.c([-0.16, 0.020000000000000018, -299.11], true);
        a.c([-4.31, 0.020000000000000018, -299.92], true);
        a.c([-1.97, 0.020000000000000018, -284.22], true);
        a.c([-1.14, 0.020000000000000018, -309.66], true);
        a.c([0.33, -60.37, -136.14], "550f9d");
        a.c([-3.21, 0.020000000000000018, -290.68], true);
        a.c([3.84, 0.020000000000000018, -302.17], true);
        a.c([1.4, 0.020000000000000018, -305.55], true);
        a.c([-3.76, 0.020000000000000018, -325.44], true);
        a.c([7.33, -60.37, -143.14], "550f9d");
        a.c([-0.3, 0.020000000000000018, -274.93], true);
        a.c([1.16, 0.020000000000000018, -322.74], true);
        a.c([2.55, 0.020000000000000018, -315.33], true);
        a.c([-6.67, -60.37, -143.14], "550f9d");
        a.c([4.91, 0.020000000000000018, -292.16], true);
        a.c([0.33, -60.37, -150.14], "550f9d");
        a.c([5.23, 0.020000000000000018, -285.29], true);
        a.c([4.22, 0.020000000000000018, -297.6], true);
        a.y([5.84, 21.68, -180.31], [0, 0, 0], [2, 56, 2], "fc8a17", 0, 0, 0.6, false, 1, true);
        a.y([-2.27, -38.32, -185.62], [0, 0, 0], [2, 56, 2], "550f9d", 0, 0, 0.6, false, 1, true);
        a.y([3.5, 21.68, -183.6], [0, 0, 0], [2, 56, 2], "fc8a17", 0, 0, 0.6, false, 1, true);
        a.y([-0.75, 11.97, -384.09], [0, -1.57, 0], [2, 2.94, 2], "00000a", 0, 0, 0.6, false, 1, false);
        a.y([4.34, -38.32, -185], [0, 0, 0], [2, 56, 2], "550f9d", 0, 0, 0.6, false, 1, true);
        a.y([1.02, 21.68, -178.17], [0, 0, 0], [2, 56, 2], "fc8a17", 0, 0, 0.6, false, 1, true);
        a.y([-3.37, 21.68, -180.7], [0, 0, 0], [2, 56, 2], "fc8a17", 0, 0, 0.6, false, 1, true);
        a.y([-0.03, 0.58, -33.66], [0, -1.57, 0], [1.5, 2.02, 1.5], "fc8a17", 0, 0, 0.6, false, 1, false);
        a.y([-6.56, 21.68, -183.72], [0, 0, 0], [2, 56, 2], "fc8a17", 0, 0, 0.6, false, 1, true);
        a.y([-0.03, -10.37, -183.14], [0, -1.57, 0], [20, 20, 20], "2e1b04", 0, 0, 0.6, false, 1, false);
        a.y([-2.85, -60.43, 13.17], [0, -1.57, 0], [1, 2.06, 1], "ffffff", 0, 0, 0.6, false, 1, false);
        a.y([-2.85, -60.43, 13.17], [0, -1.57, 0], [1.5, 2.02, 1.5], "fc8a17", 0, 0, 0.6, false, 1, false);
        a.y([1.03, 11.97, -384.09], [0, -1.57, 0], [2, 2.94, 2], "00000a", 0, 0, 0.6, false, 1, false);
        a.y([-5, 21.68, -178.33], [0, 0, 0], [2, 56, 2], "fc8a17", 0, 0, 0.6, false, 1, true);
        a.y([0.33, 4.57, -385.31], [0, 0, 0], [2.8, 5.26, 2.8], "550f9d", 0, 0, 0.6, false, 1, false);
        a.y([-0.39, 0.53, -385.31], [0, 0, 0], [1, 2.94, 1], "550f9d", 0, 0, 0.6, false, 1, false);
        a.y([0.33, 7.95, -385.31], [0, 0, 0], [2.8, 1.78, 2.8], "550f9d", 0, 0, 0.6, false, -1.0, false);
        a.y([1.26, 0.57, -385.31], [0, 0, 0], [1, 2.94, 1], "550f9d", 0, 0, 0.6, false, 1, false);
        a.y([0.33, -59.48, -143.14], [0, 0, 0], [10, 4, 10], "550f9d", 0, 0, 0.6, false, 1, true);
        a.y([-6.48, -38.32, -185.25], [0, 0, 0], [2, 56, 2], "550f9d", 0, 0, 0.6, false, 1, true);
        a.y([-0.03, 0.58, -33.66], [0, -1.57, 0], [1, 2.06, 1], "ffffff", 0, 0, 0.6, false, 1, false);
        a.y([2.29, 6.2, -385.31], [0, 0, -0.79], [1, 2.94, 1], "550f9d", 0, 0, 0.6, false, 1, false);
        a.y([10, -0.08, -384.32], [0, -1.57, 0], [1, 2.06, 1], "ffffff", 0, 0, 0.6, false, 1, false);
        a.y([10, -0.08, -384.32], [0, -1.57, 0], [1.5, 2.02, 1.5], "550f9d", 0, 0, 0.6, false, 1, false);
        a.y([-1.69, 6.15, -385.31], [0, 0, 0.79], [1, 2.94, 1], "550f9d", 0, 0, 0.6, false, 1, false);
        a.y([-1.2, 21.68, -185.44], [0, 0, 0], [2, 56, 2], "fc8a17", 0, 0, 0.6, false, 1, true);
        a.e([2.98, -60.42, 12.54]);
        a.e([999, 999, 999]);
    },
    post: function() {
        a.u('P0');
        a.u('P2');
        a.u('P4');
        a.u('P7');
        a.u('P9');
        a.u('P10');
        a.u('P11');
        a.u('P15');
        a.u('P18');
        a.u('P19');
        a.u('P20');
        a.u('P22');
        a.u('P23');
        a.u('P24');
        a.u('P25');
        a.u('P30');
        a.u('P34');
        a.u('P35');
        a.u('P36');
        a.u('P37');
        a.u('P40');
        a.u('P41');
        a.u('P42');
        a.u('P44');
        a.u('P45');
        a.u('P48');
        a.u('P49');
        a.u('P51');
        a.u('P53');
        a.u('P54');
        a.u('P55');
        a.u('P60');
        a.u('P62');
        a.u('P63');
        a.u('P64');
        a.u('C4');
        a.u('C9');
        a.u('C13');
        a.u('C15');
        a.u('Y1');
        a.u('Y4');
        a.u('Y7');
        a.u('Y10');
        a.u('Y11');
        a.u('Y18');
        a.u('Y19');
        a.u('Y20');
        a.u('E0');
        cc.set_monkey("scene.clearColor", new BABYLON.Color3.FromHexString("#04001a"));
        cc.set_monkey("speed", 0.2);
        cc.set_monkey("steer", 0.03);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
        case 0:
            if (PZ < -32.49) {
                this.section_id += 1
            }
            break;
        case 1:
            a.mov('P49', 'z', -7.25);
            a.mov('Y7', 'z', -7.25);
            a.mov('Y20', 'z', -7.25);
            if (PZ < -34.49) {
                this.section_id += 1
            }
            break;
        case 2:
            if (PZ < -36.18) {
                a.msg_set("Cool! That box moves!");
                this.section_id += 1
            }
            break;
        case 3:
            if (PZ < -51.18) {
                a.msg_del();
                this.section_id += 1
            }
            break;
        case 4:
            if (PZ < -52.88) {
                this.section_id += 1
            }
            break;
        case 5:
            a.mov('P49', 'z', -7.25);
            a.mov('Y7', 'z', -7.25);
            a.mov('Y20', 'z', -7.25);
            if (PZ < -54.88) {
                this.section_id += 1
            }
            break;
        case 6:
            if (PZ < -55.239999999999995) {
                a.msg_set("Watch out for traps!");
                this.section_id += 1
            }
            break;
        case 7:
            a.mov('P37', 'y', 1.0);
            if (PZ < -71.84) {
                a.msg_del();
                this.section_id += 1
            }
            break;
        case 8:
            if (PZ < -72.4) {
                this.section_id += 1
            }
            break;
        case 9:
            a.mov('P49', 'z', -7.25);
            a.mov('Y7', 'z', -7.25);
            a.mov('Y20', 'z', -7.25);
            if (PZ < -74.4) {
                this.section_id += 1
            }
            break;
        case 10:
            if (PZ < -74.87) {
                a.msg_set("The box is activating the traps!");
                this.section_id += 1
            }
            break;
        case 11:
            a.mov('P20', 'y', 99.0);
            if (PZ < -89.99000000000001) {
                a.msg_del();
                this.section_id += 1
            }
            break;
        case 12:
            if (PZ < -90.86) {
                this.section_id += 1
            }
            break;
        case 13:
            a.mov('P49', 'z', -7.25);
            a.mov('Y7', 'z', -7.25);
            a.mov('Y20', 'z', -7.25);
            if (PZ < -92.86) {
                this.section_id += 1
            }
            break;
        case 14:
            if (PZ < -93.04) {
                a.msg_set("But what is it here for?");
                this.section_id += 1
            }
            break;
        case 15:
            a.rot('P35', 'z', 0.25);
            if (PZ < -113.04) {
                a.msg_del();
                this.section_id += 1
            }
            break;
        case 16:
            if (PZ < -113.14) {
                this.section_id += 1
            }
            break;
        case 17:
            a.mov('P49', 'z', -7.25);
            a.mov('Y7', 'z', -7.25);
            a.mov('Y20', 'z', -7.25);
            if (PZ < -133.14) {
                this.section_id += 1
            }
            break;
        case 18:
            if (PZ < -133.14) {
                a.cam_d(4.5);
                speed = default_speed * 0.5;
                a.msg_set("Hey! That box disappeared!");
                this.section_id += 1
            }
            break;
        case 19:
            a.rot('P15', 'y', 2.0);
            if (PZ < -153.14) {
                a.cam_d(null);
                speed = cc.get("speed", null);
                a.msg_del();
                this.section_id += 1
            }
            break;
        case 20:
            if (PZ < -153.14) {
                a.msg_set("It went into that purple building.");
                this.section_id += 1
            }
            break;
        case 21:
            a.rot('P63', 'z', 2.0);
            a.rot('P64', 'z', 2.0);
            if (PZ < -173.14) {
                a.msg_del();
                this.section_id += 1
            }
            break;
        case 22:
            if (PZ < -173.14) {
                a.t(null, null, 1.5);
                this.section_id += 1
            }
            break;
        case 23:
            a.mov('P49', 'z', -7.25);
            a.mov('Y7', 'z', -7.25);
            a.mov('Y20', 'z', -7.25);
            if (PZ < -193.14) {
                a.t(null, null, null);
                this.section_id += 1
            }
            break;
        case 24:
            if (PZ < -210.29) {
                a.msg_set("You're here! Keep going, and don't touch purple.");
                this.section_id += 1
            }
            break;
        case 25:
            if (PZ < -233.79) {
                a.msg_del();
                this.section_id += 1
            }
            break;
        case 26:
            if (PZ < -233.79) {
                a.msg_set("Oh no! It's your arch enemy, Antimatter Bong!");
                this.section_id += 1
            }
            break;
        case 27:
            if (PZ < -257.28999999999996) {
                a.msg_del();
                this.section_id += 1
            }
            break;
        case 28:
            if (PZ < -257.35999999999996) {
                a.msg_set("'Yes! I have the ringed box! I have power!'");
                this.section_id += 1
            }
            break;
        case 29:
            a.rot('P9', 'y', 5.0);
            a.rot('P18', 'y', 4.0);
            a.rot('P24', 'y', 1.0);
            a.rot('P40', 'y', 3.0);
            a.rot('P45', 'y', 3.0);
            a.rot('P45', 'x', 3.0);
            a.rot('P45', 'z', 3.0);
            a.rot('P54', 'y', 2.0);
            if (PZ < -290.7) {
                a.msg_del();
                this.section_id += 1
            }
            break;
        case 30:
            if (PZ < -290.78999999999996) {
                a.msg_set("'With the power of the ringed box,'");
                this.section_id += 1
            }
            break;
        case 31:
            a.rot('P9', 'y', 5.0);
            a.rot('P18', 'y', 4.0);
            a.rot('P24', 'y', 1.0);
            a.rot('P40', 'y', 3.0);
            a.rot('P45', 'y', 3.0);
            a.rot('P45', 'x', 3.0);
            a.rot('P45', 'z', 3.0);
            a.rot('P54', 'y', 2.0);
            if (PZ < -324.13) {
                a.msg_del();
                this.section_id += 1
            }
            break;
        case 32:
            if (PZ < -324.21999999999997) {
                a.msg_set("'I will unleash purple mayhem all over the map!'");
                this.section_id += 1
            }
            break;
        case 33:
            a.rot('P9', 'y', 5.0);
            a.rot('P18', 'y', 4.0);
            a.rot('P24', 'y', 1.0);
            a.rot('P40', 'y', 3.0);
            a.rot('P45', 'y', 3.0);
            a.rot('P45', 'x', 3.0);
            a.rot('P45', 'z', 3.0);
            a.rot('P54', 'y', 2.0);
            if (PZ < -357.56) {
                a.msg_del();
                this.section_id += 1
            }
            break;
        case 34:
            if (PZ < -359.34) {
                rotation = 0.0 * Math.PI / 180;
                steer = default_steer * 0.0;
                a.msg_set("I'll defeat you once and for all! Mwa ha ha!");
                this.section_id += 1
            }
            break;
        case 35:
            if (PZ < -379.34) {
                steer = cc.get("steer", null);
                a.msg_del();
                this.section_id += 1
            }
            break;
        case 36:
            if (PZ < -379.35) {
                rotation = 0.0 * Math.PI / 180;
                steer = default_steer * 0.0;
                this.section_id += 1
            }
            break;
        case 37:
            a.mov('P0', 'y', 24.0);
            a.mov('P2', 'y', 24.0);
            a.mov('P4', 'y', 24.0);
            a.mov('P7', 'y', 99.0);
            a.mov('P10', 'y', 99.0);
            a.mov('P11', 'y', 99.0);
            a.mov('P19', 'y', 24.0);
            a.mov('P22', 'y', 24.0);
            a.mov('P23', 'y', 99.0);
            a.mov('P25', 'y', 99.0);
            a.mov('P30', 'y', 24.0);
            a.mov('P34', 'y', 24.0);
            a.mov('P36', 'y', 99.0);
            a.mov('P41', 'y', 24.0);
            a.mov('P42', 'y', 24.0);
            a.mov('P44', 'y', 24.0);
            a.mov('P48', 'y', 24.0);
            a.mov('P51', 'y', 24.0);
            a.mov('P53', 'y', 24.0);
            a.mov('P55', 'y', 24.0);
            a.mov('P60', 'y', 24.0);
            a.mov('P62', 'y', 24.0);
            a.mov('C4', 'y', 24.0);
            a.mov('C9', 'y', 24.0);
            a.mov('C13', 'y', 24.0);
            a.mov('C15', 'y', 24.0);
            a.mov('Y1', 'y', 24.0);
            a.mov('Y4', 'y', 24.0);
            a.mov('Y10', 'y', 24.0);
            a.mov('Y11', 'y', 24.0);
            a.mov('Y18', 'y', 24.0);
            a.mov('Y19', 'y', 24.0);
            a.mov('E0', 'y', 24.0);
            if (PZ < -381.35) {
                steer = cc.get("steer", null);
                this.section_id += 1
            }
            break;
        case 38:
            if (PZ < -381.35) {
                rotation = 180.0 * Math.PI / 180;
                a.msg_set("Let's go home, but we'll test your skills!");
                this.section_id += 1
            }
            break;
        case 39:
            a.rot('P9', 'y', 5.0);
            a.rot('P18', 'y', 4.0);
            a.rot('P24', 'y', 1.0);
            a.rot('P40', 'y', 3.0);
            a.rot('P45', 'y', 3.0);
            a.rot('P45', 'x', 3.0);
            a.rot('P45', 'z', 3.0);
            a.rot('P54', 'y', 2.0);
            if (PZ < -383.35) {
                a.msg_del();
                this.section_id += 1
            }
            break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [-0.03, -60.21, -62.88], [0, 0, 0], [80, 6, 5]);
        a.re('P1', [-3.03, 1.08, -22.48], [-4.71, 0, 0], [2, 3, 14]);
        a.re('P2', [-8.36, -60.87, -154.25], [0.79, 0, 0], [2, 1.1, 5]);
        a.re('P3', [-0.03, -0.87, -2.46], [0, 0, 0], [500, 1, 20]);
        a.re('P4', [-0.03, -60.87, -103.24], [0, 0, 0], [20, 1, 20]);
        a.re('P5', [-0.03, -10.37, -203.14], [0, 0, 0], [20, 20, 20]);
        a.re('P6', [-0.03, 20.87, -388.98], [0, -1.57, 0], [44, 2, 44]);
        a.re('P7', [3.94, -0.77, -84.27], [-0.37, 0, 0], [2, 1, 26]);
        a.re('P8', [-0.03, -0.91, -236.37], [0, 0, 0], [44, 1, 47]);
        a.re('P9', [2.72, -0.24, -332.07], [0, 0, 0], [5.5, 1, 2]);
        a.re('P10', [-2.29, 1.71, -62.88], [0, 0, -0.79], [3, 1, 1]);
        a.re('P11', [-2.29, 3.17, -62.88], [0, 0, 0.79], [3, 1, 1]);
        a.re('P12', [-0.03, -0.87, -144.14], [0, 0, 0], [20, 1, 24]);
        a.re('P13', [21.97, 21.58, -234.98], [-1.57, 0, 0], [44, 44, 2]);
        a.re('P14', [-0.03, -1.07, -322.98], [0, 0, 0], [9, 1, 132]);
        a.re('P15', [0.33, 0.52, -143.14], [-0.79, 0, 0], [27, 2, 2]);
        a.re('P16', [-12.03, 4.58, -214.23], [0, -1.57, 0], [20, 2, 10]);
        a.re('P17', [-7.53, -0.42, -62.88], [0, 0, 0], [5, 2, 21]);
        a.re('P18', [-0.03, -0.24, -318.87], [0, 0, 0], [5.5, 1, 2]);
        a.re('P19', [-0.2, -60.87, -68.35], [-0.79, 0, 0], [2, 1.1, 5]);
        a.re('P20', [-0.03, -0.87, -82.33], [0, 0, 0], [20, 1, 20]);
        a.re('P21', [-0.03, -0.42, -215.22], [0, 0, 0], [44, 0.1, 4]);
        a.re('P22', [-2.53, -60.87, -92.14], [0, 0, 0], [15, 20, 2]);
        a.re('P23', [0.42, 2.42, -62.88], [0, 0, 0], [7, 1, 1]);
        a.re('P24', [2.72, -0.24, -279.27], [0, 0, 0], [5.5, 1, 2]);
        a.re('P25', [-0.03, -0.87, -42.49], [0, 0, 0], [6.66, 1, 6.66]);
        a.re('P26', [7.5, -0.42, -62.88], [0, 0, 0], [5, 2, 21]);
        a.re('P27', [0.33, -10.5, -192.25], [0, 0, 0], [500, 20, 40]);
        a.re('P28', [-22.03, 21.58, -234.98], [-1.57, 0, 0], [44, 44, 2]);
        a.re('P29', [7.97, 1.08, -22.5], [-4.71, 0, 0], [2, 3, 4.5]);
        a.re('P30', [11.71, -54.65, -62.88], [0, 0, 0.79], [20, 1, 22]);
        a.re('P31', [-0.03, 26.58, -214.23], [0, -1.57, 0], [44, 2, 34]);
        a.re('P32', [-22.03, 20.87, -322.98], [-1.57, 0, 0], [132, 44, 2]);
        a.re('P33', [-0.03, -1.34, -322.98], [0, 0, 0], [44, 0.1, 132]);
        a.re('P34', [0.33, -52.39, -163.14], [0, 0, -1.57], [40, 2, 2]);
        a.re('P35', [-0.03, -0.87, -103.24], [0, 0, 0], [20, 1, 25]);
        a.re('P36', [0, 4.58, -214.23], [0, -1.57, 0], [20, 1, 10]);
        a.re('P37', [-0.03, -13.46, -66.06], [0, 0, 0], [80, 15, 6]);
        a.re('P38', [-0.03, -10.5, -92.25], [0, 0, 0], [500, 20, 160.04]);
        a.re('P39', [-0.03, -0.87, -62.88], [0, 0, 0], [10, 1, 21]);
        a.re('P40', [-2.78, -0.24, -305.67], [0, 0, 0], [5.5, 1, 2]);
        a.re('P41', [4.97, -60.37, -27.49], [0, 0, 0], [1.5, 2, 2]);
        a.re('P42', [4.97, -60.37, -37.49], [0, 0, 0], [3, 3, 3]);
        a.re('P43', [-0.03, -0.87, -22.46], [0, 0, 0], [20, 1, 20]);
        a.re('P44', [-7.53, -60.87, -115.74], [0, 0, 0], [5, 1, 8]);
        a.re('P45', [-0.03, -0.24, -349.38], [0, 0, 0], [9, 1, 2]);
        a.re('P46', [-0.38, 10.07, -383.69], [0, 0, -2.36], [0.5, 2, 2]);
        a.re('P47', [-0.03, -0.87, -163.14], [0, 0, 0], [20, 1, 20]);
        a.re('P48', [4.97, -60.87, -37.49], [0, 0, 0], [10, 0.5, 10]);
        a.re('P49', [-0.03, 0.58, -33.66], [0, 0, 0], [2, 2, 2]);
        a.re('P50', [-6.69, -0.87, -49.16], [0, 0, 0], [6.66, 1, 6.66]);
        a.re('P51', [-0.03, -60.87, -70.41], [0.79, 0, 0], [2, 1.1, 5]);
        a.re('P52', [11.97, 4.58, -214.23], [0, -1.57, 0], [20, 2, 10]);
        a.re('P53', [-0.03, -61.87, 12.04], [0, 0, 0], [9, 1, 9]);
        a.re('P54', [-0.03, -0.24, -292.47], [0, 0, 0], [5.5, 1, 2]);
        a.re('P55', [-5.03, -60.87, -47.49], [0, 0, 0], [10, 0.5, 10]);
        a.re('P56', [-5.03, -1.07, -322.98], [0, 0, 0], [1, 1, 132]);
        a.re('P57', [4.97, -1.07, -322.98], [0, 0, 0], [1, 1, 132]);
        a.re('P58', [0.81, 10.07, -383.69], [0, 0, -0.79], [0.5, 2, 2]);
        a.re('P59', [21.97, 20.87, -322.98], [-1.57, 0, 0], [132, 44, 2]);
        a.re('P60', [-2.85, -60.43, 13.17], [0, 0, 0], [2, 2, 2]);
        a.re('P61', [6.64, -0.87, -35.82], [0, 0, 0], [6.66, 1, 6.66]);
        a.re('P62', [-6.29, -60.87, -154.25], [-0.79, -0.05, 0], [2, 1.1, 5]);
        a.re('P63', [0.33, 7.61, -163.02], [0, 0, -1.57], [27, 2, 2]);
        a.re('P64', [0.33, 7.61, -163.02], [0, 0, 0], [27, 2, 2]);
        a.re('P65', [10, -0.08, -384.32], [0, 0, 0], [2, 2, 2]);
        a.re('P66', [-0.03, 42.08, -323.13], [0, -1.57, 0], [46, 220, 3]);
        a.re('S0', [-0.03, 11.09, -385.31], [0, 0, 0], [5.26, 5.26, 5.26]);
        a.re('C0', [-0.16, 0.020000000000000018, -299.11], [0, 0, 0], [2, 2, 2]);
        a.re('C1', [-4.31, 0.020000000000000018, -299.92], [0, 0, 0], [2, 2, 2]);
        a.re('C2', [-1.97, 0.020000000000000018, -284.22], [0, 0, 0], [2, 2, 2]);
        a.re('C3', [-1.14, 0.020000000000000018, -309.66], [0, 0, 0], [2, 2, 2]);
        a.re('C4', [0.33, -60.37, -136.14], [0, 0, 0], [2, 2, 2]);
        a.re('C5', [-3.21, 0.020000000000000018, -290.68], [0, 0, 0], [2, 2, 2]);
        a.re('C6', [3.84, 0.020000000000000018, -302.17], [0, 0, 0], [2, 2, 2]);
        a.re('C7', [1.4, 0.020000000000000018, -305.55], [0, 0, 0], [2, 2, 2]);
        a.re('C8', [-3.76, 0.020000000000000018, -325.44], [0, 0, 0], [2, 2, 2]);
        a.re('C9', [7.33, -60.37, -143.14], [0, 0, 0], [2, 2, 2]);
        a.re('C10', [-0.3, 0.020000000000000018, -274.93], [0, 0, 0], [2, 2, 2]);
        a.re('C11', [1.16, 0.020000000000000018, -322.74], [0, 0, 0], [2, 2, 2]);
        a.re('C12', [2.55, 0.020000000000000018, -315.33], [0, 0, 0], [2, 2, 2]);
        a.re('C13', [-6.67, -60.37, -143.14], [0, 0, 0], [2, 2, 2]);
        a.re('C14', [4.91, 0.020000000000000018, -292.16], [0, 0, 0], [2, 2, 2]);
        a.re('C15', [0.33, -60.37, -150.14], [0, 0, 0], [2, 2, 2]);
        a.re('C16', [5.23, 0.020000000000000018, -285.29], [0, 0, 0], [2, 2, 2]);
        a.re('C17', [4.22, 0.020000000000000018, -297.6], [0, 0, 0], [2, 2, 2]);
        a.re('Y0', [5.84, 21.68, -180.31], [0, 0, 0], [2, 56, 2]);
        a.re('Y1', [-2.27, -38.32, -185.62], [0, 0, 0], [2, 56, 2]);
        a.re('Y2', [3.5, 21.68, -183.6], [0, 0, 0], [2, 56, 2]);
        a.re('Y3', [-0.75, 11.97, -384.09], [0, -1.57, 0], [2, 2.94, 2]);
        a.re('Y4', [4.34, -38.32, -185], [0, 0, 0], [2, 56, 2]);
        a.re('Y5', [1.02, 21.68, -178.17], [0, 0, 0], [2, 56, 2]);
        a.re('Y6', [-3.37, 21.68, -180.7], [0, 0, 0], [2, 56, 2]);
        a.re('Y7', [-0.03, 0.58, -33.66], [0, -1.57, 0], [1.5, 2.02, 1.5]);
        a.re('Y8', [-6.56, 21.68, -183.72], [0, 0, 0], [2, 56, 2]);
        a.re('Y9', [-0.03, -10.37, -183.14], [0, -1.57, 0], [20, 20, 20]);
        a.re('Y10', [-2.85, -60.43, 13.17], [0, -1.57, 0], [1, 2.06, 1]);
        a.re('Y11', [-2.85, -60.43, 13.17], [0, -1.57, 0], [1.5, 2.02, 1.5]);
        a.re('Y12', [1.03, 11.97, -384.09], [0, -1.57, 0], [2, 2.94, 2]);
        a.re('Y13', [-5, 21.68, -178.33], [0, 0, 0], [2, 56, 2]);
        a.re('Y14', [0.33, 4.57, -385.31], [0, 0, 0], [2.8, 5.26, 2.8]);
        a.re('Y15', [-0.39, 0.53, -385.31], [0, 0, 0], [1, 2.94, 1]);
        a.re('Y16', [0.33, 7.95, -385.31], [0, 0, 0], [2.8, 1.78, 2.8]);
        a.re('Y17', [1.26, 0.57, -385.31], [0, 0, 0], [1, 2.94, 1]);
        a.re('Y18', [0.33, -59.48, -143.14], [0, 0, 0], [10, 4, 10]);
        a.re('Y19', [-6.48, -38.32, -185.25], [0, 0, 0], [2, 56, 2]);
        a.re('Y20', [-0.03, 0.58, -33.66], [0, -1.57, 0], [1, 2.06, 1]);
        a.re('Y21', [2.29, 6.2, -385.31], [0, 0, -0.79], [1, 2.94, 1]);
        a.re('Y22', [10, -0.08, -384.32], [0, -1.57, 0], [1, 2.06, 1]);
        a.re('Y23', [10, -0.08, -384.32], [0, -1.57, 0], [1.5, 2.02, 1.5]);
        a.re('Y24', [-1.69, 6.15, -385.31], [0, 0, 0.79], [1, 2.94, 1]);
        a.re('Y25', [-1.2, 21.68, -185.44], [0, 0, 0], [2, 56, 2]);
        a.re('E0', [2.98, -60.42, 12.54], [0, 0, 0], [1, 1, 1]);
        a.re('E1', [999, 999, 999], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}
