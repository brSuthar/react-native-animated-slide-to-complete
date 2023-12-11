import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  self: {
    width: 52,
    height: 52,
    backgroundColor: '#1A73EB',
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  view: {
    width: '100%',
    height: 52,
    backgroundColor: '#03318C',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 16,
    borderRadius: 2,
  },
  complete: {
    fontSize: 17,
    fontWeight: '700',
    color: '#FFF',
  },
  pending: {
    fontSize: 17,
    fontWeight: '700',
    color: '#FFF',
    position: 'absolute',
    right: 16,
  },
  overlay: {
    height: '100%',
    backgroundColor: '#1A73EB',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
});
