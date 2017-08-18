var Pc = 0.0, G = 0.0, P = 1.0, Xp = 0.0, Zp = 0.0, Xe = 0.0;
var varmeasq = [0,0,0,0];
var cov = [0,0,0,0];
var varprocess = 1E-3;
//Function for Kalman Filter
function Kalmanfilter(val, varProcess, varmeas, prev, covariance)
{  
  Pc = covariance + varProcess;
  G = Pc/(Pc + varmeas);
  P = (1-G)*Pc;
  Xp = prev;
  Zp = Xp;
  Xe = G*(val-Zp)+Xp; // Update
  return(Xe);
}

// return the quaternion conjugate of quat
function quatConjugate(quat) {
  return [quat[0],-quat[1],-quat[2],-quat[3]]
}

// returns a quaternion from an axis angle representation
function quatAxisAngle(axis, angle) {
  var halfAngle = angle / 2.0;
  var sinHalfAngle = sin(halfAngle);
  return [cos(halfAngle),
  		-axis[0] * sinHalfAngle,
  		-axis[1] * sinHalfAngle,
  		-axis[2] * sinHalfAngle];
  }

function quatProd(a, b) {
  return [a[0] * b[0] - a[1] * b[1] - a[2] * b[2] - a[3] * b[3],
  		a[0] * b[1] + a[1] * b[0] + a[2] * b[3] - a[3] * b[2],
  		a[0] * b[2] - a[1] * b[3] + a[2] * b[0] + a[3] * b[1],
  		a[0] * b[3] + a[1] * b[2] - a[2] * b[1] + a[3] * b[0]];
}

// See Sebastian O.H. Madwick report 
// "An efficient orientation filter for inertial and intertial/magnetic sensor arrays" Chapter 2 Quaternion representation
function quat2Euler(q, euler) {
	var ysqr =  q[2]* q[2];
    var t0 = -2.0 * (ysqr + q[3] * q[3]) + 1.0;
    var t1 = +2.0 * (q[1] * q[2] - q[0] * q[3]);
    var t2 = -2.0 * (q[1] * q[3] + q[0] * q[2]);
    var t3 = +2.0 * (q[2] * q[3] - q[0] * q[1]);
    var t4 = -2.0 * (q[1] * q[1] + ysqr) + 1.0;
  // Keep t2 within range of asin (-1, 1)
    t2 = t2 > 1.0 ? 1.0 : t2;
    t2 = t2 < -1.0 ? -1.0 : t2;
    euler[1] = asin(t2) * 2;
    euler[2] = atan2(t3, t4);
    euler[0] = atan2(t1, t0);
    euler[1] *= (180.0 / PI);
    euler[0] *= (180.0 / PI);
    euler[2] *= (180.0 / PI);
    if (euler[1] < 0) euler[1] = 360.0 + euler[1];
    if (euler[0] < 0) euler[0] = 360.0 + euler[0];
    if (euler[2] < 0) euler[2] = 360.0 + euler[2];  
}
  