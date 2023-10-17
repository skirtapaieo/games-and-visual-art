import numpy as np
import matplotlib

matplotlib.use("TkAgg")
import matplotlib.pyplot as plt

N = 100  # Number of oscillators
K = 0.5  # Coupling strength
omega = np.random.normal(0, 1, N)  # Natural frequencies
theta = np.random.uniform(0, 2 * np.pi, N)  # Initial phases
dt = 0.1  # Time step (increased from 0.01)

# Initialize the scatter plot
sc = plt.scatter([], [])
plt.xlim(-1.5, 1.5)
plt.ylim(-1.5, 1.5)

for t in range(1000):
    dtheta = omega + K * np.sum(np.sin(np.subtract.outer(theta, theta)), axis=1) / N
    theta += dtheta * dt
    theta = np.mod(theta, 2 * np.pi)  # Keep phase within [0, 2 * pi]

    if t % 100 == 0:
        sc.set_offsets(np.c_[np.cos(theta), np.sin(theta)])  # Update the data
        plt.pause(0.5)  # Pausing longer (increased from 0.05)

plt.show()  # Keep this outside the loop
