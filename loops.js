function loop_n(alpha) {
  var i, j, t = "<br>";
  for (i = 0; i < 8; i += 0.5) {
    if (i <= 0.5 || i >= 7) {
      for (j = 0; j < 6; j++) {
        t += alpha;
      }
      for (j = 0; j < 4; j++) {
        t += " ";
      }
      for (j = 0; j < 6; j++) {
        t += alpha;
      }
    } else if (Math.floor(i) == 1 || Math.floor(i) == 6) {
      t += "  " + alpha + alpha;
      for (j = 0; j < 8; j++) {
        t += " ";
      }
      t += alpha + alpha + "  ";
    } else {
      t += "  " + alpha + alpha;
      for (j = 3; j <= Math.floor(i); j++) {
        t += "  ";
      }
      t += alpha + alpha;
      for (j = 0; j <= 4 - Math.floor(i); j++) {
        t += "  ";
      }
      t += alpha + alpha + "  ";
    }
    t += "<br>";
  }

  return t;
}
function loop_h(alpha) {
  var i, j, t = "<br>";
  for (i = 0; i < 16; i++) {
    if (i <= 1 || i >= 14) {
      for (j = 0; j < 6; j++) {
        t += alpha;
      }
      t += "    ";
      for (j = 0; j < 6; j++) {
        t += alpha;
      }
    } else {
      t += "  " + alpha + alpha;
      if (i == 6 || i == 7) {
        for (j = 0; j < 8; j++) {
          t += alpha;
        }
      } else {
        for (j = 0; j < 8; j++) {
          t += " ";
        }
      }
      t += alpha + alpha + "  ";
    }
    t += "<br>";
  }
  return t;
}
function loop_k(alpha) {
  var i, j, t = "<br>";
  for (i = 0; i < 8; i += 0.5) {
    if (i <= 0.5) {
      for (j = 0; j < 6; j++) {
        t += alpha;
      }
      t += "  ";
      for (j = 0; j < 4; j++) {
        t += alpha;
      }
      t += "  ";
    } else if (Math.floor(i) == 1 || Math.floor(i) == 5) {
      t += "  " + alpha + alpha + "    " + alpha + alpha + "    ";
    } else if (Math.floor(i) == 2 || Math.floor(i) == 4) {
      t += "  " + alpha + alpha + "  " + alpha + alpha + "      ";
    } else if (Math.floor(i) == 3) {
      t += "  ";
      for (j = 0; j < 4; j++) {
        t += alpha;
      }
      for (j = 0; j < 8; j++) {
        t += " ";
      }
    } else if (Math.floor(i) == 6) {
      t += "  " + alpha + alpha;
      for (j = 0; j < 6; j++) {
        t += " ";
      }
      t += alpha + alpha + "  ";

    } else {
      for (j = 0; j < 6; j++) {
        t += alpha;
      }
      t += "    ";
      for (j = 0; j < 4; j++) {
        t += alpha;
      }
    }
    t += "<br>";
  }
  return t;
}
function loop_b(alpha) {
  var i, j, t = "<br>";
  for (i = 0; i < 8; i += 0.5) {
    if (i <= 0.5 || i >= 7) {
      for (j = 0; j < 10; j++) {
        t += alpha;
      }
      t += "  ";
    } else if (Math.floor(i) == 3) {
      t += "  ";
      for (j = 0; j < 8; j++) {
        t += alpha;
      }
      t += "  ";
    } else {
      t += "  " + alpha + alpha;
      for (j = 0; j < 6; j++) {
        t += " ";
      }
      t += alpha + alpha;
    }
    t += "<br>";
  }
  return t;
}
function loop_f(alpha) {
  var i, j, t = "<br>";
  for (i = 0; i < 8; i += 0.5) {
    if (i <= 0.5) {
      for (j = 0; j < 12; j++) {
        t += alpha;
      }
    } else if (Math.floor(i) == 1) {
      t += "  " + alpha + alpha;
      for (j = 0; j < 6; j++) {
        t += " ";
      }
      t += alpha + alpha;
    } else if (Math.floor(i) == 2) {
      t += "  " + alpha + alpha;
      for (j = 0; j < 8; j++) {
        t += " ";
      }
    } else if (Math.floor(i) == 3) {
      t += "  ";
      for (j = 0; j < 8; j++) {
        t += alpha;
      }
      t += "  ";
    } else if (Math.floor(i) == 7) {
      for (j = 0; j < 8; j++) {
        t += alpha;
      }
      t += "    ";
    } else {
      t += "  " + alpha + alpha;
      for (j = 0; j < 8; j++) {
        t += " ";
      }
    }
    t += "<br>";
  }
  return t;
}
function loop_r(alpha) {
  var i, j, t = "<br>";
  for (i = 0; i < 8; i += 0.5) {
    if (Math.floor(i) == 0) {
      for (j = 0; j < 10; j++) {
        t += alpha;
      }
      t += "    ";
    } else if (Math.floor(i) == 1 || Math.floor(i) == 2) {
      t += "  " + alpha + alpha;
      for (j = 0; j < 6; j++) {
        t += " ";
      }
      t += alpha + alpha + "  ";
    } else if (Math.floor(i) == 3) {
      t += "  ";
      for (j = 0; j < 8; j++) {
        t += alpha;
      }
      t += "    ";
    } else if (Math.floor(i) == 7) {
      for (j = 0; j < 6; j++) {
        t += alpha;
      }
      t += "    ";
      for (j = 0; j < 4; j++) {
        t += alpha;
      }
    } else {
      t += "  " + alpha + alpha;
      for (j = 0; j < Math.floor(i) - 3; j++) {
        t += "  ";
      }
      t += alpha + alpha;
      for (j = Math.floor(i); j < 7; j++) {
        t += "  ";
      }
    }
    t += "<br>";
  }
  return t;
}
function loop_v(alpha) {
  var i, j, t = "<br>";
  for (i = 0; i < 8; i += 0.5) {
    if (Math.floor(i) == 0) {
      for (j = 0; j < 6; j++) {
        t += alpha;
      }
      for (j = 0; j < 6; j++) {
        t += " ";
      }
      for (j = 0; j < 6; j++) {
        t += alpha;
      }
    } else if (Math.floor(i) == 1 || Math.floor(i) == 2) {
      t += alpha + alpha;
      for (j = 0; j < 10; j++) {
        t += " ";
      }
      t += alpha + alpha;
    } else if (Math.floor(i) == 3 || Math.floor(i) == 4) {
      t += alpha + alpha;
      for (j = 0; j < 6; j++) {
        t += " ";
      }
      t += alpha + alpha;
    } else if (Math.floor(i) == 5 || Math.floor(i) == 6) {
      t += alpha + alpha;
      for (j = 0; j < 2; j++) {
        t += " ";
      }
      t += alpha + alpha;
    } else {
      t += alpha + alpha;
    }
    t += "<br>";
  }
  return t;
}
function loop_w(alpha) {
  var i, j, t = "<br>";
  for (i = 0; i < 8; i += 0.5) {
    if (Math.floor(i) == 0) {
      for (j = 0; j < 6; j++) {
        t += alpha;
      }
      for (j = 0; j < 10; j++) {
        t += " ";
      }
      for (j = 0; j < 6; j++) {
        t += alpha;
      }
    } else if (Math.floor(i) == 1 || Math.floor(i) == 2) {
      t += alpha + alpha;
      for (j = 0; j < 14; j++) {
        t += " ";
      }
      t += alpha + alpha;
    } else if (Math.floor(i) == 3) {
      t += "  ";
      t += alpha + alpha;
      for (j = 0; j < 3; j++) {
        t += "  ";
      }
      t += alpha + alpha;
      for (j = 0; j < 3; j++) {
        t += "  ";
      }
      t += alpha + alpha + "  ";
    } else if (Math.floor(i) == 4) {
      t += "    " + alpha + alpha;
      for (j = 0; j < 4; j++) {
        t += " ";
      }
      t += alpha + alpha;
      for (j = 0; j < 4; j++) {
        t += " ";
      }
      t += alpha + alpha + "    ";

    } else if (Math.floor(i) == 7) {
      for (j = 0; j < 3; j++) {
        t += "  ";
      }
      t += alpha + alpha;
      for (j = 0; j < 3; j++) {
        t += "  ";
      }
      t += alpha + alpha;
      for (j = 0; j < 3; j++) {
        t += "  ";
      }
    } else {
      t += alpha + alpha + "  " + alpha + alpha + "  " + alpha + alpha + "  " + alpha + alpha;
    }
    t += "<br>";
  }
  return t;
}
function loop_x(alpha) {
  var i, j, t = "<br>";
  for (i = 0; i < 8; i += 0.5) {
    if (Math.floor(i) == 0 || Math.floor(i) == 7) {
      for (j = 0; j < 6; j++) {
        t += alpha;
      }
      t += "    ";
      for (j = 0; j < 6; j++) {
        t += alpha;
      }
    } else if (Math.floor(i) == 1 || Math.floor(i) == 6) {
      t += alpha + alpha;
      for (j = 0; j < 8; j++) {
        t += " ";
      }
      t += alpha + alpha;
    } else if (Math.floor(i) == 2 || Math.floor(i) == 5) {
      t += alpha + alpha;
      for (j = 0; j < 4; j++) {
        t += " ";
      }
      t += alpha + alpha;
    } else {
      t += alpha + alpha + alpha + alpha;
    }
    t += "<br>";
  }
  return t;
}
function loop_m(alpha) {
  var i, j, t = "<br>";
  for (i = 0; i < 8; i += 0.5) {
    if (Math.floor(i) == 0 || Math.floor(i) == 7) {
      for (j = 0; j < 6; j++) {
        t += alpha;
      }
      for (j = 0; j < 6; j++) {
        t += " ";
      }
      for (j = 0; j < 6; j++) {
        t += alpha;
      }
    } else if (Math.floor(i) == 1 || Math.floor(i) == 6) {
      t += alpha + alpha;
      for (j = 0; j < 10; j++) {
        t += " ";
      }
      t += alpha + alpha;
    } else if (Math.floor(i) == 2) {
      for (j = 0; j < 4; j++) {
        t += alpha;
      }
      for (j = 0; j < 6; j++) {
        t += " ";
      }
      for (j = 0; j < 4; j++) {
        t += alpha;
      }
    } else if (Math.floor(i) == 3) {
      for (j = 0; j < 3; j++) {
        t += alpha + alpha + "  ";
      }
      t += alpha + alpha;
    } else {
      t += alpha + alpha;
      for (j = 0; j < 4; j++) {
        t += " ";
      }
      t += alpha + alpha;
      for (j = 0; j < 4; j++) {
        t += " ";
      }
      t += alpha + alpha;
    }
    t += "<br>";
  }
  return t;
}
function loop_z(alpha) {
  var i, j, t = "<br>";
  for (i = 0; i < 8; i += 0.5) {
    if (Math.floor(i) == 0 || Math.floor(i) == 7) {
      for (j = 0; j < 12; j++) {
        t += alpha;
      }
    } else if (Math.floor(i) == 1 || Math.floor(i) == 6) {
      t += alpha + alpha;
      for (j = 0; j < 8; j++) {
        t += " ";
      }
      t += alpha + alpha;
    } else {
      for (j = 0; j < 10 - 2*Math.floor(i); j++) {
        t += " ";
      }
      t += alpha + alpha;
      for (j = 0; j < 2*Math.floor(i) - 4; j++) {
        t += " ";
      }
    }
    t += "<br>";
  }
  return t;
}












