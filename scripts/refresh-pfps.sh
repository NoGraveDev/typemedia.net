#!/bin/bash
# refresh-pfps.sh — Download current X profile pictures for all Type Media members
# Called by OpenClaw cron every hour
# Uses unavatar.io with cache-busting to get fresh images

set -e

AVATARS_DIR="/Users/vexornex28/.openclaw/workspace/typemedia.net/avatars"
TEMP_DIR="/tmp/typemedia-pfp-refresh"
CHANGED=0

mkdir -p "$TEMP_DIR"

# All handles (from members-data.js)
HANDLES=(
    rivaura luismeta Javimedia lil_defi coinism GuyTypeAura ScadMeta
    DJAlevy8 emeta777 AimDontMiss Whats_Tm_Like leahbluewater SteezType
    jaymeta peak_arf SwitchMetaX Lxpold Ajmetax ThunderAuraX mellowmeta
    dxmeta MotionMetaX Humble_Reminder hBUDS_ s1xkr francinemeta gruvemeta
    baileycMETA rafmeta Briggsmeta Mavmetax tall_data yamameta Rockmetax
    Chuckmetax SparKMetaX Pixiemetax1 xrayzone MilkMetax realmjmetax
    GirlKageX slickmetax corey_on_x chaxaurax Bjaura goosemetax
    HawaiiSol GraveMetaX devinteerfilms
)

for handle in "${HANDLES[@]}"; do
    # Lowercase filename to match existing convention
    filename=$(echo "$handle" | tr '[:upper:]' '[:lower:]').jpg
    temp_file="$TEMP_DIR/$filename"
    existing_file="$AVATARS_DIR/$filename"
    
    # Download with cache-bust param
    curl -sL "https://unavatar.io/x/${handle}?fallback=false&ttl=1h&t=$(date +%s)" \
        -o "$temp_file" \
        --max-time 10 \
        2>/dev/null || continue
    
    # Check if it's a valid image (not an error page)
    file_type=$(file -b --mime-type "$temp_file" 2>/dev/null)
    if [[ "$file_type" != image/* ]]; then
        rm -f "$temp_file"
        continue
    fi
    
    # Check file size (skip if too small, likely a placeholder)
    file_size=$(stat -f%z "$temp_file" 2>/dev/null || echo 0)
    if [[ "$file_size" -lt 1000 ]]; then
        rm -f "$temp_file"
        continue
    fi
    
    # Compare with existing — only replace if different
    if [[ -f "$existing_file" ]]; then
        existing_hash=$(md5 -q "$existing_file" 2>/dev/null)
        new_hash=$(md5 -q "$temp_file" 2>/dev/null)
        if [[ "$existing_hash" == "$new_hash" ]]; then
            rm -f "$temp_file"
            continue
        fi
    fi
    
    # Different! Replace it
    cp "$temp_file" "$existing_file"
    CHANGED=$((CHANGED + 1))
    echo "UPDATED: $handle ($filename)"
    rm -f "$temp_file"
    
    # Small delay to not hammer the API
    sleep 0.5
done

rm -rf "$TEMP_DIR"

echo "SCAN_COMPLETE: $CHANGED avatars updated"
echo "$CHANGED"
