import pickle
import warnings
import numpy as np
import sys
warnings.filterwarnings('ignore')

load_model = pickle.load(open('model.pkl', 'rb'))
# print(sys.argv[1])
features = np.array([sys.argv[1].split(',')])
for i in range(len(features)):
    i = float(i)

# print(features)

# features = np.array([[36.0, 1, 0.080353, 0.42638, 0.54715, 0.273680, 3, 1, 1, 1, 2, 2,]])
print(load_model.predict(features))