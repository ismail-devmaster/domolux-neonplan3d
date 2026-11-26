# Domolux Villa 200 — Official Deployment and Import Guide

## Overview
This guide provides complete instructions for installing, importing, and verifying the 200 Domolux Villa native 3D packages in NeonPlan 3D on Home Assistant.

## Prerequisites
1. **NeonPlan 3D Integration:** Version `4.0.2.2b1` or later installed via HACS.
2. **Authorized Publisher Registration:** Ensure `d08c59237e4f` is registered in `custom_components/neonplan3d/packs.py`.

## Package Locations
All 200 verified packages are located in:
`domolux/dist/villa_200/*.fp3dpack`

## Import Methods

### Method 1: Automated Bulk Import via Python / CLI
To install all 200 items into NeonPlan 3D storage:
```bash
python3 tools/fp3dpack.py verify domolux/dist/villa_200/*.fp3dpack
```

### Method 2: NeonPlan 3D In-App Furniture Manager
1. Open Home Assistant -> NeonPlan 3D -> Settings -> Furniture Packs.
2. Select **Import Pack** -> Browse to `domolux/dist/villa_200/`.
3. Select any or all `.fp3dpack` files. The system will verify the cryptographic Ed25519 signature from `Domolux Studio` and display the verified badge.
4. Newly imported architectural elements, appliances, and furnishings will appear immediately in the 3D floorplan designer categorized by room.

---
